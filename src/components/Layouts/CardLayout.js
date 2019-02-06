import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const Card = styled(AntdCard)`
  margin-top: 15px !important;
`;

export const CardGrid = styled(AntdCard.Grid)`
  text-align: center;
`;

export const Label = styled.div`
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
  line-height: 32px;
`;

export const InputField = styled.div`
  margin-bottom: 10px;
`;
