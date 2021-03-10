
// eslint-disable-next-line
// prettier-ignore
import React, {useEffect, useState, setState, EffectCallback, DependencyList, useRef} from 'react';
import VaccineDetails from './Vaccine';
import './App.css';

  const App = () => {
  const [Search, SetSearch] = useState('');
  const [Query, SetQuery] = useState('');
  const [Vaccine, SetVaccine] = useState({});
  

  const [QueryByKey, SetQueryByKey] = useState('');
  const [History, SetHistory] = useState([]);
  
  const [CmpId, SetCompanyId] = useState('');
  const [CompanyData, SetCompanyData] = useState([]);

  const [TraderId, SetTraderId] = useState('');
  const [TraderData, SetTraderData] = useState([]);


  const useNonInitialEffect = (effect: EffectCallback, deps?: DependencyList) => {
    const initialRender = useRef(true);
  
    useEffect(() => {
      let effectReturns: void | (() => void | undefined) = () => {};
  
          if (initialRender.current) {
        initialRender.current = false;
      } else {
        effectReturns = effect();
      }
  
      if (effectReturns && typeof effectReturns === "function") {
        return effectReturns;
      }
    }, deps);
  };

    useNonInitialEffect(() => { 
      // eslint-disable-next-line
      FetchVaccine(); // eslint-disable-next-line
    }, [Query]);
    
    useNonInitialEffect(() =>
    {
      FetchHistory();
    }, [QueryByKey]);

    useNonInitialEffect(() =>{
      FetchCmp();
    },[CmpId]);

    useNonInitialEffect(() =>{
      FetchTrader();
    },[TraderId]);

  const FetchVaccine = async() => {  
    console.log('From client app (FetchVaccine):');
    const queryResponse = await fetch(`http://localhost:8080/worldstate/${Query}`);
    const vaccineData = await queryResponse.json();
    SetVaccine(vaccineData);
    SetQueryByKey(vaccineData.batchId);
  };
  
  const FetchHistory = async() => {
    const queryByKeyResponse = await fetch(`http://localhost:8080/worldstate/${QueryByKey}`);
    const vaccineHistory = await queryByKeyResponse.json();
    SetHistory(vaccineHistory);
    console.log(vaccineHistory);

    var n = vaccineHistory.company.lastIndexOf('#');
    var companyID = vaccineHistory.company.substring(n+1); 
    SetCompanyId(companyID);
    console.log(companyID);

    var n2 = vaccineHistory.trader.lastIndexOf('#');
    var TraderID = vaccineHistory.trader.substring(n2+1);
    SetTraderId(TraderID);
    console.log(TraderID);
  }

  const FetchCmp = async() =>{
    const queryCompanyData = await fetch(`http://localhost:8080/worldstate/${CmpId}`);
    const cmpData = await queryCompanyData.json();
    SetCompanyData(cmpData);
  }


  const FetchTrader = async() =>{
    const queryTraderData = await fetch(`http://localhost:8080/worldstate/${TraderId}`);
    const traderData = await queryTraderData.json();
    SetTraderData(traderData);
  }

  const UpdateSearch = (e) => {
    SetSearch(e.target.value);
  };

  const GetSearch = (e) => {
    e.preventDefault();
    SetQuery(Search);
    SetSearch('');
  };
  // prettier-ignore
  return (
    <div className="App">
      <br />
      <br />
      <form onSubmit={GetSearch} className="search-form">
        <input className="search-bar" type="text" value={Search} onChange= {UpdateSearch}/>
        <button className="search-button" type="submit">
          Details
        </button>
      </form>
      <br />
      <VaccineDetails
        VaccineID={Vaccine.VaccineID}
        BatchID={Vaccine.batchId}
        PassedBy={Vaccine.passedBy}
        Practitioner={Vaccine.practitioner}
        ShotType={Vaccine.shotType}
        LastUpdated={Vaccine.lastUpdated}

        
        Organization={History.orgDescription}
        ReportName={History.reportName}
        ReportYear={History.reportYear}    
        Tester={History.tester}
        Acidity={History.acidity}
        Antigen={History.antigen}
        ChemicalActivity={History.chemicalActivity}
        Condition={History.condition}
        FinalScore={History.finalScore}
        Timestamp={History.timestamp}

        PLContainerNo={History.PL_Container_No}
        PLFDANo={History.PL_FDA_NO}
        PLIssueDate={History.PL_IssueDate}
        PLLoadedVessel={History.PL_LoadedVessel}
        PLTimeStamp={History.PL_timestamp}

        CompanyId={CmpId}
        Company={CompanyData.organization}
        CompanyAddress={CompanyData.address}

        TId={TraderId}
        Trader={TraderData.organization}
        TraderAddress={TraderData.address}
        FairTradePremiumInvested={History.fairTradePremiumInvested}
        Investment1={History.investmentTitle1}
        Investment2={History.investmentTitle2}
        Investment3={History.investmentTitle3}
/>     
    </div>
  );
};
export default App;