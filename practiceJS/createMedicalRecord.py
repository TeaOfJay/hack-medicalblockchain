

import json
import urllib.request

conditionsSetURL = 'http://localhost:3000/api/MedicalRecord'
newConditions = {
  "$class": "org.blockchainboyz.medicalrecord.MedicalRecord",
  "format": "pdf",
  "data": "unicode",
  "recordSignature": "111111",
  "patient": "100000",
  "provider": "000001"
}

params = json.dumps(newConditions).encode('utf8')
req = urllib.request.Request(conditionsSetURL, data=params,
headers={'content-type': 'application/json'})
response = urllib.request.urlopen(req)
print(response.read().decode('utf8'))

