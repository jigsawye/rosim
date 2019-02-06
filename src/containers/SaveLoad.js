import PropTypes from 'prop-types';
import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import { Button, Divider, List, Modal, Popconfirm, Tooltip } from 'antd';
import { findIndex, reject } from 'lodash';

import ArchiveDescription from '../components/SaveLoad/ArchiveDescription';
import SaveInput from '../components/SaveLoad/SaveInput';
import useLoadSaveDataAction from '../actions';
import useStoreContext from '../hooks/useStoreContext';

const SaveLoadContainer = styled.div`
  margin-left: 16px;

  @media only screen and (max-width: 767.99px) {
    margin-left: 0;
    padding: 12px 16px;
  }
`;

const generateId = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

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
  };

  constructor(prop) {
    super(prop);
    const archives = JSON.parse(localStorage.getItem('archives'));

    this.state.archives = archives || [];
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

  copiedText = () =>
    this.state.copied ? '複製成功！' : '複製分享網址至剪貼板';

  showModal = () => this.setState({ visible: true, saveName: '' });

  closeModal = () => this.setState({ visible: false });

  updateSaveName = ({ target }) => this.setState({ saveName: target.value });

  saveData = () => {
    const { archives, saveName } = this.state;
    const { currentData } = this.props;

    if (saveName === '') {
      return;
    }

    const data = {
      ...currentData,
      _id: generateId(),
      name: saveName,
    };

    this.setState({
      archives: [...archives, data],
      saveName: '',
    });
  };

  saveExistsData = ({ _id, name }) => {
    const { archives } = this.state;
    const index = findIndex(archives, { _id });
    archives[index] = { ...this.props.currentData, _id, name };

    this.setState({ archives });
  };

  loadData = data => this.props.loadSaveData(data);

  deleteData = ({ _id }) => {
    this.setState(({ archives }) => ({
      archives: reject(archives, { _id }),
    }));
  };

  resetCopied = () => this.setState({ copied: false });

  handleCopyClick = ({ _id, name, ...data }) => {
    const jsonData = JSON.stringify(data);
    const base64Data = btoa(jsonData);
    const url = `${window.location.origin}?data=${base64Data}`;

    copy(url);
    this.setState({ copied: true });
  };

  generateCurrentUrl = () => this.handleCopyClick(this.props.currentData);

  renderListItem = item => (
    <List.Item actions={this.renderListActions(item)}>
      <List.Item.Meta
        title={item.name}
        description={<ArchiveDescription item={item} />}
      />
    </List.Item>
  );

  renderListActions = item => {
    const actions = [
      {
        title: '覆蓋原',
        text: '儲存',
        onConfirm: () => this.saveExistsData(item),
      },
      { title: '載入此', text: '載入', onConfirm: () => this.loadData(item) },
      {
        title: '刪除此',
        text: '刪除',
        onConfirm: () => this.deleteData(item),
      },
    ];

    return [
      <Tooltip title={this.copiedText()} onVisibleChange={this.resetCopied}>
        <Button size="small" onClick={() => this.handleCopyClick(item)}>
          產生網址
        </Button>
      </Tooltip>,
      ...actions.map(({ title, text, onConfirm }) => (
        <Popconfirm
          placement="bottom"
          title={`你確定要${title}存檔嗎?`}
          onConfirm={onConfirm}
        >
          <Button size="small">{text}</Button>
        </Popconfirm>
      )),
    ];
  };

  render() {
    const { visible, archives, saveName } = this.state;

    return (
      <SaveLoadContainer>
        <Button icon="save" onClick={this.showModal}>
          儲存 / 載入
        </Button>
        <Modal
          title="儲存 / 載入"
          width={600}
          visible={visible}
          onCancel={this.closeModal}
          footer={<Button onClick={this.closeModal}>關閉</Button>}
        >
          <SaveInput
            value={saveName}
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
            dataSource={archives}
            renderItem={this.renderListItem}
          />
        </Modal>
      </SaveLoadContainer>
    );
  }
}

function SaveLoadWrapper() {
  const [currentData] = useStoreContext();
  const loadSaveData = useLoadSaveDataAction();

  return <SaveLoad currentData={currentData} loadSaveData={loadSaveData} />;
}

export default SaveLoadWrapper;
