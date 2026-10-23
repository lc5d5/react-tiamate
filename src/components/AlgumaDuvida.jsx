import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';


const initialForm = { nome: '', email: '', mensagem: '' };

const AlgumaDuvida = ({ onSubmit }) => {

    const [form, setForm] = useState(initialForm);
    const [erros, setErros] = useState({});
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (erros[name]) {
            setErros((prev) => ({ ...prev, [name]: undefined }));

        }
    }

    const validate = () => {
        const newErrors = {};

        if (!form.nome.trim()) {
            newErrors.nome = 'informe o seu nome';
        }
        if (!form.email.trim()) {
            newErrors.email = 'Informe seu e-mail';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            novosErros.email = 'E-mail inválido.';
        }
        if (!form.mensagem.trim()) {
            newErrors.mensagem = 'Escreva sua mensagem.';
        }
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');
        try {
            if (onSubmit) {
                await onSubmit(form);
            } else {
                console.log('Dados do formulário:', form);
            }
            setStatus('success');
            setForm(initialForm);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }



    return (
        <div className="w-full py-10 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[570px_1fr] gap-10 xl:gap-16 items-start">

                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-[32px] sm:text-[40px] xl:text-[50px] font-bold text-[#A97744]">
                        Alguma dúvida?
                    </h2>
                    <p className="text-[16px] sm:text-[18px] text-[#3B2416]">
                        Deixe sua mensagem
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                        <div>
                            <input
                                type="text"
                                name="nome"
                                required
                                value={form.nome}
                                onChange={handleChange}
                                placeholder="Nome e Sobrenome"
                                className="w-full h-[50px] sm:h-[60px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#E5BA73]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="email@exemplo.com"
                                className="w-full h-[50px] sm:h-[60px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#E5BA73]"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                name="mensagem"
                                required
                                value={form.mensagem}
                                onChange={handleChange}
                                placeholder="Mensagem"
                                className="w-full h-[180px] sm:h-[241px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-[#E5BA73]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 bg-[#CF9A5A] hover:bg-[#A16B28] text-[#3B2416] font-semibold rounded transition-colors duration-200"
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-700">Mensagem enviada com sucesso!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600">Não foi possível enviar. Tente novamente.</p>
                        )}
                    </form>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-6 lg:pt-[142px]">
                    <div className="flex items-center justify-between w-full max-w-[393px]">
                        <a href='https://www.facebook.com/tiamatecoffee/?locale=pt_BR'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href='https://www.instagram.com/tiamatefortaleza/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaInstagram />
                        </a>
                        <a href='https://www.youtube.com/watch?v=RWCP7z8ufiA'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaYoutube />
                        </a>
                        <a href='https://www.linkedin.com/company/tiamatecoffee/home/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <h3 className="max-w-full w-[465px] font-['Archivo'] font-bold text-[50px] leading-[100%] text-[#321416] text-left">
                        Curta e<br />Compartilhe
                    </h3>
                </div>

            </div>
        </div>
    );
}

export default AlgumaDuvida;