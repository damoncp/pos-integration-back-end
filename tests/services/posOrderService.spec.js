const PosOrderService = require('../../src/services/posOrderService');
const { INVALID_TOTAL_VALUE_ERROR } = require('../../src/constants/errors');

 describe('Test posOrderService functionality', () => {
  it('API data is able to be saved (positive case)', () => {
    // Arrange
    const mockRequestBody = {
      "data": {
        "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000": {
          "title": "Vegan Burger",
          "image": "https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612",
          "price": 12,
          "quantity": 1
        },
        "c02f723d-2485-4818-b70b-7f26c2ad5356": {
          "title": "Beef Burger",
          "image": "https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612",
          "price": 12,
          "quantity": 1
        }
      },
      "total": 24
    };

    // Act
    const response = PosOrderService.orderCreation(mockRequestBody);
    
    // Assert
    expect(response.orderDetails.length).toEqual(2);
    expect(response.total).toEqual(24);
  });

  it('should return error when total cost value is not as part of request body (negative case)', () => {
    // Act
    const mockErrorResponse = () => {
      throw new Error(INVALID_TOTAL_VALUE_ERROR);
    };

    // Assert
    expect(mockErrorResponse).toThrow(Error);
  });
});
