// import OpenAI from "openai";
import { Configuration, OpenAIApi } from 'openai';

export default defineEventHandler(async (event) => {
	const { OPENAI_API_KEY, OPENAI_MODEL } = useRuntimeConfig();
	const config = new Configuration({
		apiKey: OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(config);
	const body = await readBody(event);

	const completion = await openai.createChatCompletion({
		model: OPENAI_MODEL,
		messages: body || [],
	});

	return completion.data;
})
