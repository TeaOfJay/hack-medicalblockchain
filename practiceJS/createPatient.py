
import json
import urllib.request

conditionsSetURL = 'http://localhost:3000/api/Patient'
newConditions = {
  "$class": "org.blockchainboyz.medicalrecord.Patient",
  "patientId": "100000",
  "trustedProviders": [
    "000001"
  ]
}

params = json.dumps(newConditions).encode('utf8')
req = urllib.request.Request(conditionsSetURL, data=params,
				headers={'content-type': 'application/json'})

response = urllib.request.urlopen(req)
print(response.read().decode('utf8'))
