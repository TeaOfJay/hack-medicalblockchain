/**
 * @param {org.blockchainboyz.medicalrecord.UpdateRecord} transact 
 * @transaction
*/
function UpdateRecord(transact) {
  
  transact.record.data = transact.newData;
  transact.record.format = transact.newFormat;
  
  return getAssetRegistry('org.blockchainboyz.medicalrecord.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}

/**
 * @param {org.blockchainboyz.medicalrecord.TransferRecord} TransferRecord
 * @transaction
*/
function TransferRecord(transact) {
  
  transact.record.providers = transact.newProvider;
  
  return getAssetRegistry('org.blockchainboyz.medicalrecord.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}


/**
 * @param {org.blockchainboyz.medicalrecord.CreateRecord} transact 
 * @transaction
*/
function CreateRecord(transact) {
  
  var newrecord = {
    	
  };
  
  return getAssetRegistry('org.blockchainboyz.medicalrecord.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}

/**
 * @param {org.blockchainboyz.medicalrecord.AddTrustedProvider} transact 
 * @transaction
*/
function AddTrustedProvider(transact) {
  
  if(!transact.patient.trustedProviders.find(function(x){return x==transact.provider;}))
    	transact.patient.trustedProviders.push(transact.provider);
  
  return getAssetRegistry('org.blockchainboyz.medicalrecord.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}


/**
 * @param {org.blockchainboyz.medicalrecord.AddTrustedProvider} transact 
 * @transaction
*/
function RemoveTrustedProvider(transact) {
  
  
  var p = transact.patient.trustedProviders
  p = p.filter(function(x){return x!=transact.provider;});
  
  return getAssetRegistry('org.blockchainboyz.medicalrecord.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}
