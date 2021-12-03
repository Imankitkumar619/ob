import React from 'react';
import styled from 'styled-components';
import IssuesTableHeader from './IssuesTableHeader';
import IssuesContainer from '../../containers/IssuesContainer';


const IssuesTableWraper = styled.div`
    margin-bottom : 20px;
    
`;
const IssuesTable = () => (
  <IssuesTableWraper>
    {/* <div  style = {{overflow: "scroll"}}> */}
    <IssuesTableHeader />
    <IssuesContainer />
    {/* </div> */}
  </IssuesTableWraper>

);

export default IssuesTable;
