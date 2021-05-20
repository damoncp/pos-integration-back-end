const { BAD_REQUEST_ERROR, INTERNAL_SERVER_ERROR } = require("../../src/constants/errors");
const PosOrderController = require('../../src/controllers/posOrderController');

describe('Test posOrderController functionality', () => {
  it('should return 200 with response when API request is success ', async () => {
    // Arrange
    const mockBodyData = {
      "data": {
        "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000": {
          "title": "Vegan Burger",
          "image": "https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612",
          "price": 12,
          "quantity": 1
        },
      },
      "total": 12
    };

    const mockOutputJSON = {
      "a68b01c8-00a8-44fe-bb94-a5c395083a14": {
        "id": "f9b9dee9-9876-40c0-9ab2-60156cbf4076",
        "orderDetails": [
          {
            "title": "Vegan Burger (Test Record)",
            "image": "https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612",
            "price": 12,
            "quantity": 1
          }
        ],
        "total": 12
      }
    };

    const mockRequest = { body: mockBodyData };

    const mockResponse = {
      status: () => ({
        statusCode: 201,
        send: () => mockOutputJSON,
      }),
    };
    const mockNext = () => {};

    // Act
    const mockResult = await PosOrderController.createOrder(mockRequest, mockResponse, mockNext);

    // Assert
    expect(Object.values(mockResult)[0].total).toBe(12);
  });

  it('should return BAD_REQUEST_ERROR error when data is not available', async () => {
    // Arrange
    const mockRequest = { body: { data: {} } };
    const mockResponse = {
      status: () => ({
        statusCode: 400,
        json: () => ({ message: BAD_REQUEST_ERROR})
      }),
    };
    const mockNext = () => {};
    
    // Act
    const mockResult = await PosOrderController.createOrder(mockRequest, mockResponse, mockNext);

    // Assert
    expect(mockResult.message).toBe(BAD_REQUEST_ERROR);
  });

  it('should return INTERNAL_SERVER_ERROR error when data is not available', async () => {
    // Arrange
    const mockRequest = { body: { data: {} } };
    const mockResponse = {
      status: () => ({
        statusCode: 500,
        json: () => ({ message: INTERNAL_SERVER_ERROR})
      }),
    };
    const mockNext = () => {};
    
    // Act
    const mockResult = await PosOrderController.createOrder(mockRequest, mockResponse, mockNext);

    // Assert
    expect(mockResult.message).toBe(INTERNAL_SERVER_ERROR);
  });
});
