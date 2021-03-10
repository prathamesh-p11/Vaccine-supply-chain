<!-- [![Build Status](https://travis-ci.org/IBM/VaccineSupplyChain.svg?branch=master)](https://travis-ci.org/IBM/VaccineSupplyChain) -->

# Create a fair trade supply network with Hyperledger Fabric 1.4 (Local)

# Steps (Local Deployment)

Refer [Developing smart contracts with IBM Blockchain Platform extension for VS Code](https://cloud.ibm.com/docs/blockchain?topic=blockchain-develop-vscode#develop-vscode-guided-tutorials) for IBM's official resources on developing smart contracts with IBM Blockchain Platform Developer Tools.

1. [Clone the Repo](#step-1-clone-the-repo)
2. [Install Dependencies](#step-2-install-dependencies)
3. [Package Contract](#step-3-package-contract)
4. [Create new fabric environment and connect to identity](#step-4-create-new-fabric-environment-and-connect-to-identity)
5. [Install and Instantiate Contract](#step-5-install-and-instantiate-contract)
6. [Export Connection Details](#step-6-export-connection-details)
7. [Export Local Wallet](#step-7-export-local-wallet)
8. [Submit Transactions](#step-8-submit-transactions)


## Step 1. Clone the Repo

Git clone this repo onto your computer in the destination of your choice, then go into the web-app folder:
```
User$ git clone https://github.com/prathamesh-p11/Vaccine-SupplyChain.git
```
Navigate to the `web-app` directory:
```
User$ cd VaccineSupplyChain/web-app
```

## Step 2. Install Dependencies

Install required dependencies using NPM:
```
web-app$ npm install --ignore-scripts
```

## Step 3. Package Contract


![packageFile](/docs/img2_addLibToWorkspace.png)
Right-click under your folders in your workspace area and then click *Add Folder to Workspace* and then highlight the 
`VaccineSupplyChain/lib` directory as shown in the picture below, and then click on *add*:

![packageFile](/docs/img3-addLib.png)

 Next, we have to package the smart contract. Click on the *F1* button on your keyboard,
 which will bring up the VSCode command pallete. From there, navigate and click on `Package a Smart Contract Project`.
![packageFile](/docs/img4-package.png)


 Next, the extension will ask the following question:
 ```
 Choose a workspace folder to package
 ```
 Click on the *lib* folder - note we do not want to package our client (i.e. our web-app directory).

  ![packageFile](/docs/img5-selectLib.png)


  ![packageFile](/docs/img6-PackagedContract.png)
 
 Note that this `.cds` file is extremely important if we want to run 
 our smart contract on the cloud.

## Step 4. Create new fabric environment and connect to identity
The IBM® Blockchain Platform extension provides preconfigured environment templates within Visual Studio Code for developing, packaging, and testing smart contracts. From IBM's documentation:
Before you can deploy a smart contract, use the following steps to deploy the preconfigured network:
- Ensure that Docker is running on your machine.
- Open the IBM Blockchain Platform tab in VS Code.
- In the Fabric Environments pane, click 1 Org Local Fabric. If Docker is running, the local instance should be started once the Hyperledger Fabric images are downloaded.
  ![packageFile](/docs/localSetup/img1_addEnv.png)
  ![packageFile](/docs/localSetup/img1_addEnv2.png)
  ![packageFile](/docs/localSetup/img1_addEnv3.png)
- Provide a name for your new environment.
  ![packageFile](/docs/localSetup/img1_addEnv4.png)

- Click Org1 in the Fabric Gateways pane to connect to the local network. Select the admin identity to connect with. 
  ![packageFile](/docs/localSetup/img2_connectIdentity.png)
You can create a new identity by right-clicking the Certificate Authority node in the Fabric Environments pane. This new identity can then be added to a wallet and be associated with Org1 Local Fabric connection.

The VS Code extension creates a basic Fabric network that includes one orderer, one peer, and one certificate authority. The peer is joined to a channel named mychannel. You can find the list of nodes, organizations, and channels that belong to the network in the Fabric Environments pane. 


## Step 5. Install and Instantiate Contract
- Now, let's click on *+ Install* and choose the peer that is available. Then the extension will ask you which package to 
 install. Choose *vaccineSC@0.0.1.cds*.
  ![packageFile](/docs/localSetup/img3_install.png)
  ![packageFile](/docs/localSetup/img3_install2.png)
- Lastly, we need to instantiate the contract to be able to submit transactions 
on our network. Click on *+ Instantiate* and then choose *vaccineSC@0.0.1*.
  ![packageFile](/docs/localSetup/img4_inst.png)
  ![packageFile](/docs/localSetup/img4_inst2.png)
- When promted for a function enter `init`.
  ![packageFile](/docs/localSetup/img4_inst3.png)
  ![packageFile](/docs/localSetup/img4_inst4.png)
- When prompted for a private data collection, or and endorsement 
policy, hit `enter` on your keyboard, which will take all of the defaults.
  ![packageFile](/docs/localSetup/img4_inst5.png)
  ![packageFile](/docs/localSetup/img4_inst6.png)
- This will instantiate the smart contract. This may take some time. You should see the contract under the *instantiated* tab on the left-hand side, once it 
is finished instantiating. 
  ![packageFile](/docs/localSetup/img4_inst7.png)


## Step 6. Export Connection Details
- Under `FABRIC GATEWAYS`, click on `Org1` gateway.
- When asked to choose an identity to connect with, choose `admin`.
  ![packageFile](/docs/localSetup/img2_connectIdentity.png)
- Once you are connected, you should see `connected via gateway: ENVIRONMENT_NAME` 
under the `FABRIC GATEWAYS` tab.
- To export your connection profile, right click on the 3 dot menu on the **FABRIC GATEWAYS** pane and `Export Connection Profile` Save this file to `vaccineSC/server/connection.json`. 
  ![packageFile](/docs/localSetup/img5_exportConn.png)
  ![packageFile](/docs/localSetup/img5_exportConn2.png)


## Step 7. Export Local Wallet 
- 🚨Under the `FABRIC WALLETS` pane, click on `Org1 Wallet`. Note this is very important, if you click on the Orderer wallet at the top, 
the application will not work! 🚨
  ![packageFile](/docs/localSetup/img6_exportWallet.png)
- Export and save the wallet to `vaccineSC/server/wallet`
  ![packageFile](/docs/localSetup/img6_exportWallet2.png)


## Step 8. Submit Transactions
*Note that this step is the same whether for local or cloud deployment. The only 
different is that we will use queries to see the ledger locally, whereas on cloud 
we can view the ledger via the block explorer on IBM Blockchain Platform *

#### Enroll admin
- First, navigate to the `server` directory, and install the node dependencies.
  ```bash
  cd server
  npm install
  ```
- ⚠️ if you get a grpc error run:
  ```bash
  npm rebuild
  ``` 

```
VaccineSupplyChain$ cd web-app
web-app$ node query.js
```
Your output should be the following:
  ![packageFile](/docs/localSetup/img7_query.png)
 
All we have done, is queried the ledger for all data. 
There is none, since we haven't added anything to the ledger. Ok. Now, let's add our first 
member to the ledger, the grower. To do this, we will start our web-app and interact with our
app to submit transactions to the network. 

### Add Members to the network
Let's bring up a new terminal window, and in that terminal, go to the vaccineSC directory that 
we cloned earlier, and start the app in that window with the following command.

 ```
vaccineSC$ cd web-app
web-app$ npm start
```

In your browser, go to http://localhost:8080/explorer/ If all goes well, you should 
see something like the picture below:
  ![packageFile](/docs/localSetup/img8_app.png)

You should see the Controller expand with the GET/POST methods.
Click on the green `POST/Grower` button and then `Try it out` to the right of the `POST/Grower` button.
This will enable you to write in a request body. Enter required data in JSON format and then click the blue `Execute` button under the request body.
```
```
 If all goes well, you should see something similar to 
the image below:

  ![packageFile](/docs/localSetup/img9_addedCompany.png)

Great. We have made our first update to the ledger. Keep it going and add other memeber's data to the ledger.
To make sure things are actually updated, go ahead and run the query script again: 

 ```
web-app$ node query.js
```

You should see the ledger to be as follows: 

![packageFile](/docs/localSetup/img10_queryAll.png)


So that's pretty much it! Now when we add this data to the chain, our web-app can then query for a specific Vaccine ID.
