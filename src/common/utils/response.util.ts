import { SuccessResponse } from '../interfaces/responses/success-response.interface';

export function successResponse<T>(
  data: T,
  message = 'Request successful',
  statusCode = 200,
): SuccessResponse<T> {
  return {
    success: true,
    statusCode,
    message,
    data,
  };
}
