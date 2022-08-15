import { formatResponse, getDay } from "./helpers"

describe('helpers', () => {
  describe('formatResponse', () => {
    it('should format the response correctly', () => {

      const response = {
        "lat": 12,
        "lon": 54,
        "current": {
          "temp": 27.35,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "icon": "01d"
            }
          ]
        },
        "daily": [
          {
            "temp": {
              "day": 29.36
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "icon": "12n"
              }
            ]
          },
          {
            "temp": {
              "day": 30.22
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "icon": "10d"
              }
            ]
          }
        ]
      }
      const result = {
        "current": {
          "icon": "01d",
          "temp": 27,
          "weather": "Clouds",
        },
        "daily": [{
          "icon": "12n",
          "temp": 29,
          "weather": "Clouds",
        }, {
          "icon": "10d",
          "temp": 30,
          "weather": "Rain",
        },
        ],
      }

      expect(formatResponse(response)).toEqual(result)

    })
  })

  describe('getDay', () => {
    beforeAll(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(2022, 7, 14));
    });

    it('should return current day if no shift passed', () => {
      expect(getDay()).toEqual('Sun')
    })

    it('should return correct day if shift passed and it\'s more than 7 days', () => {
      expect(getDay(10)).toEqual('Wed')
    })
  })
})
