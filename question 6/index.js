'use strict';
 
exports.handler = async (event) => 
{
    let fullName = "";
    let responseCode = 200;
    
    
    if (event.body) 
    {
        let body = JSON.parse(event.body)
        
        if (body.first_name && body.last_name)
        {
            fullName = body.first_name + " " + body.last_name;
        }
        else if (body.first_name || body.last_name)
        {
            fullName = body.first_name || body.last_name;
        }
    }

    let responseBody = 
    {
        statusCode: responseCode,
        output: fullName
    };

    let response = 
    {
        body: JSON.stringify(responseBody)
    };
    
    return response;
};