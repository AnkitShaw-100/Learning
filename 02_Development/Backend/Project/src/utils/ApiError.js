class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        error= [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = NULL
        this.message = message
        this.success = false
        this.errors = this.errors

        if(statck) {
            this.stack = statck
        }
        else{
            Error.captureSatckTrace(this, this.constructor)
        }
    }
}