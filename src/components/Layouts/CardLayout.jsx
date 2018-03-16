import { Card as AntdCard } from 'antd';
import styled from 'styled-components';

export const Card = styled(AntdCard)`
  margin-top: 15px !important;
`;

export const CardGrid = styled(AntdCard.Grid)`
  text-align: center;
`;

export const CardText = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
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
