const { Configuration, OpenAI } = require('openai');

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAI(configuration);
    }

    static textCompletion({prompt}){
      return {
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": prompt
              }
            ]
          }
        ],
        response_format: {
          "type": "json_object"
        },
        temperature: 1,
        max_completion_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }
    }
}