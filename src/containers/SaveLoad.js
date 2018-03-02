import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Modal, List, Divider, Popconfirm, Tooltip } from 'antd';
import { findIndex, reject } from 'lodash';
import copy from 'copy-to-clipboard';

import ArchiveDescription from '../components/SaveLoad/ArchiveDescription';
import SaveInput from '../components/SaveLoad/SaveInput';
import { loadSaveData } from '../actions';

const SaveLoadContainer = styled.div`
  display: inline-block;
  margin-left: 16px;
  float: right;

  @media only screen and (max-width: 767.99px) {
    margin-left: 0;
    float: none;
    display: block;
    padding: 12px 16px;
  }
`;

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

class SaveLoad extends React.Component {
  state = {
    archives: [],
    visible: false,
    copied: false,
    saveName: '',
  };

  constructor(prop) {
    super(prop);
    let archives = [];
    const savedArchives = localStorage.getItem('archives');

    if (savedArchives) {
      archives = JSON.parse(savedArchives);
    }

    this.state.archives = archives;
  }

  componentDidUpdate() {
    localStorage.setItem('archives', JSON.stringify(this.state.archives));
  }

  showModal = () => this.setState({ visible: true, saveName: '' })

  closeModal = () => this.setState({ visible: false })

  updateSaveName = ({ target }) => this.setState({ saveName: target.value })

  saveData = () => {
    if (this.state.saveName === '') {
      return;
    }

    const data = {
      ...this.props.currentData,
      _id: generateId(),
      name: this.state.saveName,
    };

    this.setState({
      archives: [...this.state.archives, data],
      saveName: '',
    });
  }

  saveExistsData = ({ _id, name }) => {
    const { archives } = this.state;
    const index = findIndex(archives, { _id });
    archives[index] = { ...this.props.currentData, _id, name };

    this.setState({ archives });
  }

  loadData = data => this.props.loadSaveData(data)

  deleteData = ({ _id }) => {
    const archives = reject(this.state.archives, { _id });
    this.setState({ archives });
  }

  resetCopied = () => this.setState({ copied: false })

  copyToClipboard = (item) => {
    const jsonData = JSON.stringify(item);
    const base64Data = btoa(jsonData);
    const url = `${window.location.origin}?data=${base64Data}`;

    copy(url);
    this.setState({ copied: true });
  }

  renderListItem = (item) => (
    <List.Item actions={this.renderListActions(item)}>
      <List.Item.Meta title={item.name} description={<ArchiveDescription item={item} />} />
    </List.Item>
  )

  renderListActions = (item) => {
    const actions = [
      { title: '覆蓋原', text: 'Save', onConfirm: () => this.saveExistsData(item) },
      { title: '載入此', text: 'Load', onConfirm: () => this.loadData(item) },
      { title: '刪除此', text: 'Delete', onConfirm: () => this.deleteData(item) },
    ];

    return [
      <Tooltip title={this.state.copied ? '複製成功！' : '複製到剪貼板'} onVisibleChange={this.resetCopied}>
        <a onClick={() => this.copyToClipboard(item)}>Url</a>
      </Tooltip>,
      ...actions.map(({ title, text, onConfirm }) => (
        <Popconfirm placement="bottom" title={`你確定要${title}存檔嗎?`} onConfirm={onConfirm}>
          <a>{text}</a>
        </Popconfirm>
      )),
    ];
  }

  render() {
    return (
      <SaveLoadContainer>
        <Button icon="save" type="sm" onClick={this.showModal}>Save / Load</Button>
        <Modal
          title="Save / Load"
          width={600}
          visible={this.state.visible}
          onCancel={this.closeModal}
          footer={<Button onClick={this.closeModal}>Close</Button>}>
          <SaveInput
            value={this.state.saveName}
            updateSaveName={this.updateSaveName}
            saveData={this.saveData}
          />
          <Divider />
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={this.state.archives}
            renderItem={this.renderListItem}
          />
        </Modal>
      </SaveLoadContainer>
    );
  }
}

const mapStateToProps = state => ({ currentData: state });

const mapDispatchToProps = dispatch => bindActionCreators({ loadSaveData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
