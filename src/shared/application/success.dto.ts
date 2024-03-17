class SuccessDTO {
  message: string;
  data: any;
  statusCode: number;

  constructor(data: any = [], message: string, statusCode: number = 200) {
    this.message = message || "Successfully providing response";
    this.data = data;
    this.statusCode = statusCode;
  }

  toResponseJson() {
    return {
      message: this.message,
      data: this.data,
      statusCode: this.statusCode,
    };
  }
}

export default SuccessDTO;
