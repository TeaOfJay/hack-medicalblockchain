
import json
import urllib.request

conditionsSetURL = 'http://localhost:3000/api/TransferRecord'

newConditions = {
  "$class": "org.blockchainboyz.medicalrecord.TransferRecord",
  "record": "111111",
  "newProvider": "000001",
  "transactionId": "010101",
  "timestamp": "2017-10-08T16:13:51.785Z"
}

params = json.dumps(newConditions).encode('utf8')

req = urllib.request.Request(conditionsSetURL, data=params,

headers={'content-type': 'application/json'})

response = urllib.request.urlopen(req)
print(response.read().decode('utf8'))

