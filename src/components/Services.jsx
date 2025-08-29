import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, BarChart, ShieldCheck, CheckCircle, Bot, Palette, Gift, Home } from 'lucide-react';

const servicesData = [
	{
		icon: <Bot className="w-8 h-8 text-pink-500" />, // Ícone representando bonecas feitas à mão
		title: 'Bonecas Amigurumi',
		description:
			'Bonecas feitas à mão em crochê, perfeitas para presentear ou decorar.',
		features: [
			'Diversos modelos',
			'Fios de alta qualidade',
			'Acabamento delicado',
		],
	},
	{
		icon: <Palette className="w-8 h-8 text-yellow-500" />, // Ícone representando personalização
		title: 'Personalização',
		description:
			'Encomende bonecas personalizadas: escolha cores, roupas e acessórios.',
		features: [
			'Bonecas sob medida',
			'Opções de personalização',
			'Detalhes exclusivos',
		],
	},
	{
		icon: <Gift className="w-8 h-8 text-green-500" />, // Ícone representando presentes
		title: 'Presentes Artesanais',
		description:
			'Surpreenda alguém especial com um presente feito à mão, cheio de afeto.',
		features: [
			'Embalagem especial',
			'Cartão personalizado',
			'Entrega para todo o Brasil',
		],
	},
	{
		icon: <Home className="w-8 h-8 text-purple-500" />, // Ícone representando decoração afetiva
		title: 'Decoração Afetiva',
		description:
			'Bonecas para decorar quartos, festas e ambientes com charme artesanal.',
		features: [
			'Decoração de festas',
			'Quartos infantis',
			'Ambientes temáticos',
		],
	},
];

const Services = () => {
	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-br from-pink-100 to-yellow-100"
		>
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6">
						O que fazemos
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Conheça nossos produtos artesanais e opções de personalização para
						encantar você ou presentear quem ama.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{servicesData.map((service, index) => (
						<motion.div
							key={index}
							className="service-card group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
						>
							<div className="text-pink-500 mb-4 group-hover:scale-110 transition-transform">
								{service.icon}
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-800">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-4">{service.description}</p>
							<ul className="space-y-2">
								{service.features.map((feature, idx) => (
									<li
										key={idx}
										className="flex items-center text-sm text-gray-500"
									>
										<CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;