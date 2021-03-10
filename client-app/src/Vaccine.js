import React from 'react';
// prettier-ignore
const VaccineDetails = ({VaccineID,BatchID, PassedBy, Practitioner, ShotType, LastUpdated, Organization, ReportName, ReportYear, Tester, Acidity, Antigen, ChemicalActivity, Condition, FinalScore, Timestamp, PLContainerNo, PLFDANo,PLIssueDate, PLLoadedVessel, PLTimeStamp  ,CompanyId, Company, CompanyAddress, TId, Trader, TraderAddress, FairTradePremiumInvested, Investment1,Investment2,Investment3}) => {
    return(
        <div className="timeline-container">
            <link rel="stylesheet" href="mystyle.css"></link>
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {VaccineID}
                    </span>
                    <p className="key">Batch Id :</p>
                    <p className="value">{BatchID}</p>
                    <p className="key">Passed By :</p>
                    <p className="value">{PassedBy}</p>
                    <p className="key">Practitioner :</p>
                    <p className="value">{Practitioner}</p>
                    <p className="key">ShotType :</p>
                    <p className="value">{ShotType}</p>
                    <p className="key">Last Updated :</p>
                    <time className="value">{LastUpdated}</time>
                    <span className="circle"></span>
                </div>
            </div>    
            
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {CompanyId}
                    </span>
                    <p className="key">Company :</p>
                    <p className="value">{Company}</p>
                    <p className="key">Company Address :</p>
                    <p className="value">{CompanyAddress}</p>
                    <span className="circle"></span>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {TId}
                    </span>
                    <p className="key">Trader :</p>
                    <p className="value">{Trader}</p>
                    <p className="key">Trader Address :</p>
                    <p className="value">{TraderAddress}</p>
                    <p className="key">Fair Trade Premium Invested :</p>
                    <p className="value">{FairTradePremiumInvested}</p>
                    <p className="key">Investment 1 Title:</p>
                    <p className="value">{Investment1}</p>
                    <p className="key">Investment 2 Title:</p>
                    <p className="value">{Investment2}</p>
                    <p className="key">Investment 3 Title:</p>
                    <p className="value">{Investment3}</p>
                    <span className="circle"></span>
                </div>
            </div>
            
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {BatchID}
                    </span>
                    <p className="key">Packing list Issue Date:</p>
                    <p className="value">{PLIssueDate}</p>
                    <p className="key">Packing list Container No:</p>
                    <p className="value">{PLContainerNo}</p>
                    <p className="key">Packing list Loaded Vessel:</p>
                    <p className="value">{PLLoadedVessel}</p>
                    <p className="key">Packing list FDA No :</p>
                    <p className="value">{PLFDANo}</p>
                    <p className="key">Packing list Time Stamp :</p>
                    <p className="value">{PLTimeStamp}</p>
                    <span className="circle"></span>
                </div>
            </div>


            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag">
                        {VaccineID}
                    </span>
                    <p className="key">Organization :</p>
                    <p className="value">{Organization}</p>
                    <p className="key">Report Name :</p>
                    <p className="value">{ReportName}</p>
                    <p className="key">Report Year :</p>
                    <p className="value">{ReportYear}</p>
                    <p className="key">Tester :</p>
                    <p className="value">{Tester}</p>
                    <p className="key">Acidity :</p>
                    <p className="value">{Acidity}</p>
                    <p className="key">Antigen :</p>
                    <p className="value">{Antigen}</p>
                    <p className="key">ChemicalActivity :</p>
                    <p className="value">{ChemicalActivity}</p>
                    <p className="key">Condition :</p>
                    <p className="value">{Condition}</p>
                    <p className="key">FinalScore :</p>
                    <p className="value">{FinalScore}</p>
                    <p className="key">Timestamp :</p>
                    <time className="value">{Timestamp}</time>
                    <span className="circle"></span>
                </div>
            </div>
            
        </div>
    );
};
// prettier-ignore
export default VaccineDetails;