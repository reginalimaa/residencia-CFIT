'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgendamentoForm = () => {
    const [formData, setFormData] = useState({
        dataHoraAgendamento: '',
        disponibilidade: '',
        statusAgendamento: '',
        MetodoDePagamento: '',
        StatusDePagamento: '',
        StatusDeConsulta: '',
        idCliente: '',
        idServico: '',
        // Outros campos do formulário conforme necessário
    });
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const clientId = localStorage.getItem('clientId');
        if (clientId) {
            setFormData({ ...formData, idCliente: clientId });
        }
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8080/servicos')
            .then(response => {
                setServicos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os serviços:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/agendamentos', formData);

            console.log('Novo agendamento criado:', response.data);
            // Lógica para lidar com o sucesso do envio do agendamento
        } catch (error) {
            console.error('Erro:', error.message);
            // Lógica para lidar com erros durante o envio do agendamento
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleBack = () => {
        // Adicione aqui a lógica para redirecionar para a página anterior
         window.history.back();
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="dataHoraAgendamento" className="form-label">Data e Hora do Agendamento</label>
                            <input
                                type="datetime-local"
                                name="dataHoraAgendamento"
                                value={formData.dataHoraAgendamento}
                                onChange={handleChange}
                                className="form-control"
                                id="dataHoraAgendamento"
                                placeholder="Data e Hora do Agendamento"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MetodoDePagamento" className="form-label">Método de Pagamento</label>
                            <select
                                name="MetodoDePagamento"
                                value={formData.MetodoDePagamento}
                                onChange={handleChange}
                                className="form-select"
                                id="MetodoDePagamento"
                            >
                                <option value="">Selecione o Método de Pagamento</option>
                                <option value="Cartão">Cartão</option>
                                <option value="Pix">Pix</option>
                                <option value="Boleto">Boleto</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="idCliente" className="form-label">ID do Cliente</label>
                            <input
                                type="text"
                                name="idCliente"
                                value={formData.idCliente}
                                onChange={handleChange}
                                className="form-control"
                                id="idCliente"
                                placeholder="ID do Cliente"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idServico" className="form-label">Nome do Serviço</label>
                            <select
                                name="idServico"
                                value={formData.idServico}
                                onChange={handleChange}
                                className="form-select"
                                id="idServico"
                            >
                                <option value="">Selecione o Serviço</option>
                                {servicos.map(servico => (
                                    <option key={servico.id} value={servico.id}>
                                        {servico.nomeServico}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Agendar</button>
                        <button type="button" className="btn btn-secondary" onClick={handleBack}>Voltar</button>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default AgendamentoForm;