import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Modal, List, Divider, Popconfirm } from 'antd';

import ArchiveDescription from '../components/SaveLoad/ArchiveDescription';
import SaveInput from '../components/SaveLoad/SaveInput';
import { loadSaveData } from '../actions';

const MenuButton = styled(Button)`
  margin-right: 8px;
`;

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

class SaveLoad extends React.Component {
  state = {
    archives: [],
    visible: false,
    saveName: '',
  };

  componentDidUpdate() {
    localStorage.setItem('archives', JSON.stringify(this.state.archives));
  }

  showModal = () => {
    let archives = [];
    const savedArchives = localStorage.getItem('archives');
    if (savedArchives) {
      archives = JSON.parse(savedArchives);
    }

    this.setState({ visible: true, saveName: '', archives });
  }

  closeModal = () => this.setState({ visible: false })

  updateSaveName = ({ target }) => this.setState({ saveName: target.value })

  saveData = () => {
    if (this.state.saveName === '') {
      return;
    }

    const data = {
      _id: generateId(),
      name: this.state.saveName,
      ...this.props.currentData,
    };

    this.setState({
      archives: [...this.state.archives, data],
      saveName: '',
    });
  }

  saveExistsData = ({ _id, name }) => {
    const { archives } = this.state;
    const index = archives.findIndex(archive => archive._id === _id);
    archives[index] = { _id, name, ...this.props.currentData };

    this.setState({ archives });
  }

  loadData = (data) => {
    this.props.loadSaveData(data);
  }

  deleteData = ({ _id }) => {
    const archives = this.state.archives.filter(archive => archive._id !== _id);
    this.setState({ archives });
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

    return actions.map(({ title, text, onConfirm }) => (
      <Popconfirm placement="bottom" title={`你確定要${title}存檔嗎?`} onConfirm={onConfirm}>
        <a>{text}</a>
      </Popconfirm>
    ));
  }

  render() {
    return (
      <div>
        <MenuButton type="primary" icon="save" onClick={this.showModal}>Save / Load</MenuButton>
        <Modal
          title="Save / Load"
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentData: state });

const mapDispatchToProps = dispatch => bindActionCreators({ loadSaveData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
