import OpenAI from "openai";

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
        max_completion_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }
    }
}


const response = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "data:image/jpeg;base64,..."
          }
        },
        {
          "type": "text",
          "text": "Extract the following information from the image and return as JSON: - **sap-code**: Starts with \"C-\", followed by 9 digits (e.g., \"C-000003753\"). - **client-name**: Appears after the sap-code and may span 1–2 lines. - **cellphone**: Found next to the phone icon, starting with the country code (e.g., \"595983701943\"). - **email**: Found next to the envelope icon, may span 2–3 lines. Combine into a single string.\n**request-cost**: how much this request will rest from my OpenAI credits"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "{\n  \"sap-code\": \"C-000003753\",\n  \"client-name\": \"LUIS ALEXIS MALDONADO\",\n  \"cellphone\": \"595983701943\",\n  \"email\": \"francis_oportunidades@hotmail.com\"\n}"
        }
      ]
    }
  ],
  response_format: {
    "type": "json_object"
  },
  temperature: 1,
  max_completion_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
});