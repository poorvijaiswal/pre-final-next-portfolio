import axios from "axios"
import { LANGUAGE_VERSIONS } from '../../../IDE-Components/langSelector/constants';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})
export const executeCode = async (language, sourceCode, input = '') => {
    try {
        console.log(LANGUAGE_VERSIONS[language], "version");
        console.log(language, "vLang");
        console.log(sourceCode)

        const response = await API.post("/execute", {
            language: language,
            version: LANGUAGE_VERSIONS[language],
            stdin: input,
            files: [
                {
                    content: sourceCode,
                },
            ],
        });
        if (response.status !== 200) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }

        const data = response.data;

        if (!data.run) {
            throw new Error('Invalid response structure: missing run property');
        }

        return data;
    } catch (error) {
        console.error("Error in executeCode:", error);
        throw error;
    };


};
