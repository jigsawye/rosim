import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Row, Col, Button, Modal, List, Input, Divider, Popconfirm } from 'antd';

import ArchiveDescription from '../components/SaveLoad/ArchiveDescription';
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

  handleClose = () => {
    this.setState({ visible: false });
  }

  updateSaveName = ({ target }) => this.setState({ saveName: target.value })

  saveData = () => {
    if (this.state.saveName === '') {
      return
    }

    const data = {
      _id: generateId(),
      name: this.state.saveName,
      ...this.props.currentData,
    };

    this.setState({
      archives: [...this.state.archives, data],
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

  render() {
    return (
      <div>
        <MenuButton type="primary" icon="save" onClick={this.showModal}>Save / Load</MenuButton>
        <Modal
          title="Save / Load"
          visible={this.state.visible}
          onCancel={this.handleClose}
          footer={<Button onClick={this.handleClose}>Close</Button>}>
          <Row gutter={16}>
            <Col span={20}>
              <Input
                placeholder="Save Name"
                value={this.state.saveName}
                onChange={this.updateSaveName}/>
            </Col>
            <Col span={4}>
              <Button type="primary" onClick={this.saveData}>Save</Button>
            </Col>
          </Row>
          <Divider />
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={this.state.archives}
            renderItem={item => (
              <List.Item actions={[
                <Popconfirm
                  placement="bottom"
                  title="你確定要覆蓋原存檔嗎?"
                  onConfirm={() => this.saveExistsData(item)}>
                  <a>Save</a>
                </Popconfirm>,
                <Popconfirm
                  placement="bottom"
                  title="你確定要載入此存檔嗎?"
                  onConfirm={() => this.loadData(item)}>
                  <a>Load</a>
                </Popconfirm>,
                <Popconfirm
                  placement="bottom"
                  title="你確定要刪除此存檔嗎?"
                  onConfirm={() => this.deleteData(item)}>
                  <a>Delete</a>
                </Popconfirm>,
              ]}>
                <List.Item.Meta
                  title={item.name}
                  description={<ArchiveDescription item={item} />}
                />
              </List.Item>
            )}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentData: state });

const mapDispatchToProps = dispatch => bindActionCreators({ loadSaveData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveLoad);
