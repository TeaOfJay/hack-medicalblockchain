/**
 * Track the trade of a commodity from one trader to another
 * @param {org.blockchainboyz.record.UpdateRecord} transact 
 * @transaction
*/
function UpdateRecord(transact) {
  var iso = transact.updateTime;
  transact.record.entry = iso;
  return getAssetRegistry('org.blockchainboyz.record.MedicalRecord')
        .then(function (assetRegistry) {
            return assetRegistry.update(transact.record);
        });
  
}