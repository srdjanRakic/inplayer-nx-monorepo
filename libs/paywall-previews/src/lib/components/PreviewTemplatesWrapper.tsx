import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getPreviewTemplate } from '../utils/generateComponentData';

const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
  width: 200rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const PreviewTemplatesWrapper: FunctionComponent = () => {
  const { preview } = useParams();
  const Preview = getPreviewTemplate(preview);

  return (
    <WrapperNavigationChild>
      <div>
        <h1>{preview}</h1>
        <Preview />
      </div>
    </WrapperNavigationChild>
  );
};

export default PreviewTemplatesWrapper;
