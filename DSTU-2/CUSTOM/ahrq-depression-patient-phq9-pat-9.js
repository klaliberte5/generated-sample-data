const PATIENT_ID = "AHRQ-9"
const CONDITION_ID = "625749"
const ALLERGY_INTOLERANCE_ID = "900638"

const transaction = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        {
            "fullUrl": "Patient/${PATIENT_ID}",
            "resource": {
              "resourceType": "Patient",
              "id": PATIENT_ID,
              "meta": {
                "versionId": "1",
                "lastUpdated": "2021-03-10T13:11:36+00:00"
              },
              "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">PHQ <b>NINE </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2801459</td></tr><tr><td>Address</td><td><span>221 B Wall Street </span><br/><span>New </span><span>New York </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>14 December 2017</span></td></tr></tbody></table></div>"
              },
              "identifier": [
                {
                  "use": "usual",
                  "type": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR",
                        "display": "Medical record number",
                        "userSelected": false
                      }
                    ],
                    "text": "MRN"
                  },
                  "system": "urn:oid:2.16.840.1.113883.3.927.2.100",
                  "value": "TEST-9",
                  "period": {
                    "start": "2021-07-16T16:16:15+00:00"
                  }
                },
                {
                  "use": "usual",
                  "type": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR",
                        "display": "Medical record number",
                        "userSelected": false
                      }
                    ],
                    "text": "MRN"
                  },
                  "system": "urn:oid:2.16.840.1.113883.6.1000",
                  "value": "TEST-9",
                  "period": {
                    "start": "2021-03-05T22:00:00+00:00"
                  }
                }
              ],
              "active": true,
              "name": [
                {
                  "use": "official",
                  "family": [
                    "Michelle"
                  ],
                  "given": [
                    "Mendias"
                  ]
                }
              ],
              "gender": "female",
              "birthDate": "1986-12-10",
              "deceasedBoolean": false
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Patient/TEST-9"
            }
        },
        {
            "fullUrl": "Condition/${CONDITION_ID}",
            "resource": {
              "resourceType": "Condition",
              "id": CONDITION_ID,
              "patient": {
                "reference": "Patient/${PATIENT_ID}"
              },
              "dateRecorded": "2021-04-21T10:04:18+00:00",
              "identifier": {
                "system": "https://pro.deiddev.om1.com/",
                "value": "ae65d63e-0fd5-4f27-abce-87814f9ed0bf"
              },
              "code": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "35489007",
                    "display": "Depressive disorder",
                    "userSelected": true
                  }
                ],
                "text": "Depressive disorder"
              },
              "category": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/condition-category",
                    "code": "diagnosis",
                    "display": "Diagnosis"
                  }
                ],
                "text": "Diagnosis"
              },
              "clinicalStatus": "active",
              "verificationStatus": "confirmed",
              "onsetDateTime": "2020-03-31T09:30:00+00:00"
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Condition"
            }
        },
        {
            "fullUrl": "AllergyIntolerance/${ALLERGY_INTOLERANCE_ID}",
            "resource": {
              "resourceType": "AllergyIntolerance",
              "onset": "2020-07-08",
              "recordedDate": "2020-07-08",
              "patient": {
                "reference": "Patient/${PATIENT_ID}"
              },
              "substance": {
                "coding": [
                  {
                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                    "code": "352272",
                    "display": "Escitalopram 10 MG Oral Tablet [Lexapro]",
                    "userSelected": false
                  }
                ],
                "text": "Lexapro"
              },
              "status": "active",
              "criticality": "CRITH",
              "reaction": [
                {
                  "id": "12760021",
                  "manifestation": [
                    {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "271807003",
                          "display": "Eruption of skin (disorder)",
                          "userSelected": false
                        }
                      ],
                      "text": "Rash"
                    }
                  ]
                }
              ]
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "AllergyIntolerance"
            }
        }
    ]
}