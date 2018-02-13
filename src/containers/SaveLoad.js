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

class SaveLoad extends React.Component {
  state = {
    archives: [],
    visible: false,
    saveName: '',
  };

  showModal = () => {
    let archives = [];
    const savedArchives = localStorage.getItem('archives');
    if (savedArchives) {
      archives = JSON.parse(savedArchives);
    }

    this.setState({ visible: true, saveName: '', archives });
  }

  handleOk = () => {
    localStorage.setItem('archives', JSON.stringify(this.state.archives));
    this.setState({ visible: false });
  }

  handleCancel = () => this.setState({ visible: false })

  updateSaveName = ({ target }) => this.setState({ saveName: target.value })

  saveData = () => {
    if (this.state.saveName === '') {
      return
    }

    const data = {
      name: this.state.saveName,
      ...this.props.currentData,
    };

    this.setState({
      archives: [...this.state.archives, data],
    });
  }

  saveExistsData = (data) => {
    const { archives } = this.state;
    const index = archives.findIndex(({ name }) => name === data.name);
    archives[index] = { name: data.name, ...this.props.currentData };
    this.setState({ archives });
  }

  loadData = (data) => {
    this.props.loadSaveData(data);
  }

  deleteData = (data) => {
    const archives = this.state.archives.filter(({ name }) => name !== data.name);
    this.setState({ archives });
  }

  render() {
    return (
      <div>
        <MenuButton type="primary" icon="save" onClick={this.showModal}>Save / Load</MenuButton>
        <Modal
          title="Save / Load"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
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
