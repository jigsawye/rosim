import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Modal, List, Divider, Popconfirm, Tooltip } from 'antd';
import { findIndex, reject } from 'lodash';
import copy from 'copy-to-clipboard';

import ArchiveDescription from '../components/SaveLoad/ArchiveDescription';
import SaveInput from '../components/SaveLoad/SaveInput';
import loadSaveDataAction from '../actions';

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

const generateId = () => `_${Math.random().toString(36).substr(2, 9)}`;

class SaveLoad extends Component {
  static propTypes = {
    currentData: PropTypes.shape({
      baseLevel: PropTypes.number.isRequired,
      jobLevel: PropTypes.number.isRequired,
      job: PropTypes.arrayOf(PropTypes.string).isRequired,
      stats: PropTypes.object.isRequired,
      otherStats: PropTypes.object.isRequired,
      hpsp: PropTypes.object.isRequired,
      aspd: PropTypes.object.isRequired,
      skills: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    loadSaveData: PropTypes.func.isRequired,
  }

  constructor(prop) {
    super(prop);
    let archives = [];
    const savedArchives = localStorage.getItem('archives');

    if (savedArchives) {
      archives = JSON.parse(savedArchives);
    }

    this.state.archives = archives;
  }

  state = {
    archives: [],
    visible: false,
    copied: false,
    saveName: '',
  };

  componentDidUpdate() {
    localStorage.setItem('archives', JSON.stringify(this.state.archives));
  }

  copiedText = () => (this.state.copied ? '複製成功！' : '複製分享網址至剪貼板')

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

  handleCopyClick = ({ _id, name, ...data }) => {
    const jsonData = JSON.stringify(data);
    const base64Data = btoa(jsonData);
    const url = `${window.location.origin}?data=${base64Data}`;

    copy(url);
    this.setState({ copied: true });
  }

  generateCurrentUrl = () => this.handleCopyClick(this.props.currentData)

  renderListItem = item => (
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
      <Tooltip title={this.copiedText()} onVisibleChange={this.resetCopied}>
        <button onClick={() => this.handleCopyClick(item)}>Url</button>
      </Tooltip>,
      ...actions.map(({ title, text, onConfirm }) => (
        <Popconfirm placement="bottom" title={`你確定要${title}存檔嗎?`} onConfirm={onConfirm}>
          <button>{text}</button>
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
          footer={<Button onClick={this.closeModal}>Close</Button>}
        >
          <SaveInput
            value={this.state.saveName}
            copiedText={this.copiedText()}
            updateSaveName={this.updateSaveName}
            saveData={this.saveData}
            resetCopied={this.resetCopied}
            generateCurrentUrl={this.generateCurrentUrl}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  loadSaveData: loadSaveDataAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
