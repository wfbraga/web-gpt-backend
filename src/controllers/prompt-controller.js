const InputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
    async sendText(req, res) {
      const openaiAPI = openai.configuration();
      const inputModel = new InputPrompt(req.body);      
      try {
        const response = await openaiAPI.createCompletion(
          openai.textCompletion('Que é melhor, aprender Express ou Adonis?')
        );
        return res.status(200).json({
          sucess: true,
          data: response.data.choices[0].message.content[0].text
      });
      }
      catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          error: error.response ? error.response : 'Internal Server Error',
        });
      }
  }
}