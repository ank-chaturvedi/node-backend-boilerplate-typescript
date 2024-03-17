type ApiErrorParams = {
  message?: string;
  statusCode?: number;
  errors?: any;
  code: string;
};

const errorType = {
  ROUTE_NOT_FOUND: {
    name: "ROUTE_NOT_FOUND",
    statusCode: 404,
    message: "Route not found",
  },
  INVALID_PARAMETER: {
    name: "INVALID_PARAMETER",
    statusCode: 400,
    message: "Invalid parameter",
  },
  BAD_REQUEST: {
    name: "BAD_REQUEST",
    statusCode: 400,
    message: "Bad request",
  },
  UNAUTHORIZED_ACCESS: {
    name: "UNAUTHORIZED_ACCESS",
    statusCode: 401,
    message: "Unauthorized access",
  },
  MISSING_AUTHORIZATION_HEADER: {
    name: "MISSING_AUTHORIZATION_HEADER",
    statusCode: 401,
    message: "Missing authorization HEADER",
  },
};

export class ApiError extends Error {
  statusCode: number;
  errors: any;
  code: string;
  constructor({
    code = errorType.BAD_REQUEST.name,
    message = errorType.BAD_REQUEST.message,
    statusCode = errorType.BAD_REQUEST.statusCode,
    errors,
  }: ApiErrorParams) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    if (errors) this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }

  toResponseJson() {
    return {
      message: this.message,
      data: this.errors,
      code: this.code,
    };
  }
}

export class RouteNotFound extends ApiError {
  constructor(message: string = errorType.ROUTE_NOT_FOUND.message) {
    super({
      code: errorType.ROUTE_NOT_FOUND.name,
      message,
      statusCode: errorType.ROUTE_NOT_FOUND.statusCode,
    });
  }
}

export class InvalidParameter extends ApiError {
  constructor(errors: any = []) {
    super({
      code: errorType.INVALID_PARAMETER.name,
      message: errorType.INVALID_PARAMETER.message,
      statusCode: errorType.INVALID_PARAMETER.statusCode,
      errors,
    });
  }
}

export class BadRequest extends ApiError {
  constructor() {
    super({
      code: errorType.BAD_REQUEST.name,
      message: errorType.BAD_REQUEST.message,
      statusCode: errorType.BAD_REQUEST.statusCode,
    });
  }
}

export class UnAuthorizedAccess extends ApiError {
  constructor() {
    super({
      code: errorType.UNAUTHORIZED_ACCESS.name,
      message: errorType.UNAUTHORIZED_ACCESS.message,
      statusCode: errorType.UNAUTHORIZED_ACCESS.statusCode,
    });
  }
}

export class MissingAuthorizationHeader extends ApiError {
  constructor() {
    super({
      code: errorType.MISSING_AUTHORIZATION_HEADER.name,
      message: errorType.MISSING_AUTHORIZATION_HEADER.message,
      statusCode: errorType.MISSING_AUTHORIZATION_HEADER.statusCode,
    });
  }
}
