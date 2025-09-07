// Base de receitas expandida por proteína e método de preparo
const recipesDatabase = {
    // Receitas de Café da Manhã e Lanches (mantidas)
    'breakfast-1': {
        title: 'Pão Integral com Ovos Mexidos',
        description: 'Clássico nutritivo e energético',
        husband: {
            portion: '2 fatias de pão integral + 2 ovos + 30g queijo minas + 1 banana',
            calories: '~520 kcal'
        },
        wife: {
            portion: '1 fatia de pão integral + 1 ovo + 20g queijo minas + café sem açúcar',
            calories: '~280 kcal'
        },
        ingredients: [
            '4 fatias de pão integral',
            '3 ovos',
            '50g de queijo minas',
            '1 colher de sopa de azeite',
            'Sal e pimenta a gosto',
            '1 banana (para ele)',
            'Café sem açúcar (para ela)'
        ],
        instructions: [
            'Aqueça uma frigideira antiaderente com um fio de azeite',
            'Bata os ovos em uma tigela com sal e pimenta',
            'Despeje os ovos na frigideira e mexa delicadamente até ficarem cremosos',
            'Torre o pão integral',
            'Monte o prato com o pão, ovos mexidos e queijo minas',
            'Para ele: adicione a banana fatiada',
            'Para ela: sirva com café sem açúcar'
        ],
        tips: 'Use ovos caipiras para mais sabor e nutrientes. O pão integral fornece fibras importantes para a digestão.'
    },
    'breakfast-2': {
        title: 'Panqueca de Aveia com Banana',
        description: 'Rica em fibras e potássio',
        husband: {
            portion: '3 panquecas + 1 banana + 30ml mel + café com leite',
            calories: '~580 kcal'
        },
        wife: {
            portion: '2 panquecas + 1/2 banana + 15ml mel + café sem açúcar',
            calories: '~320 kcal'
        },
        ingredients: [
            '100g de aveia em flocos',
            '2 ovos',
            '1 banana madura',
            '200ml de leite',
            '1 colher de chá de canela',
            '1 pitada de sal',
            'Mel para servir',
            'Óleo para untar'
        ],
        instructions: [
            'Bata no liquidificador a aveia, ovos, banana, leite, canela e sal',
            'Deixe a massa descansar por 5 minutos',
            'Aqueça uma frigideira antiaderente untada',
            'Despeje porções da massa e espalhe bem',
            'Cozinhe por 2-3 minutos cada lado até dourar',
            'Sirva quente com mel e fatias de banana'
        ],
        tips: 'A aveia fornece fibras que ajudam na saciedade. Use banana bem madura para adoçar naturalmente.'
    },
    'breakfast-3': {
        title: 'Vitamina Proteica de Frutas',
        description: 'Refrescante e nutritiva',
        husband: {
            portion: '400ml vitamina + 2 torradas integrais + 20g pasta amendoim',
            calories: '~620 kcal'
        },
        wife: {
            portion: '300ml vitamina + 1 torrada integral',
            calories: '~280 kcal'
        },
        ingredients: [
            '1 banana',
            '150g de morango',
            '200ml de leite',
            '2 colheres de sopa de whey protein (opcional)',
            '1 colher de sopa de aveia',
            '1 colher de chá de mel',
            'Gelo a gosto',
            'Pão integral para acompanhar'
        ],
        instructions: [
            'Lave bem os morangos e corte em pedaços',
            'Descasque e corte a banana',
            'Bata todos os ingredientes no liquidificador',
            'Adicione gelo se preferir mais gelado',
            'Sirva imediatamente',
            'Acompanhe com torradas integrais'
        ],
        tips: 'Rico em antioxidantes e proteínas. O whey protein é opcional mas aumenta o valor proteico.'
    },
    'breakfast-4': {
        title: 'Tapioca com Queijo e Ovo',
        description: 'Sem glúten e deliciosa',
        husband: {
            portion: '2 tapiocas + 1 ovo + 40g queijo + suco natural',
            calories: '~520 kcal'
        },
        wife: {
            portion: '1 tapioca + 1 ovo + 20g queijo + café sem açúcar',
            calories: '~280 kcal'
        },
        ingredients: [
            '100g de goma de tapioca',
            '2 ovos',
            '60g de queijo minas',
            '1 pitada de sal',
            'Água se necessário',
            'Óleo para untar'
        ],
        instructions: [
            'Peneire a goma de tapioca para eliminar grumos',
            'Aqueça uma frigideira antiaderente',
            'Espalhe a goma formando um círculo fino',
            'Quando começar a grudar, vire a tapioca',
            'Coloque o queijo e o ovo mexido de um lado',
            'Dobre ao meio e sirva quente'
        ],
        tips: 'A tapioca é naturalmente sem glúten. Use fogo médio para não queimar.'
    },
    'breakfast-5': {
        title: 'Mingau de Aveia com Frutas',
        description: 'Cremoso e reconfortante',
        husband: {
            portion: '200g mingau + frutas + 30g granola + café com leite',
            calories: '~580 kcal'
        },
        wife: {
            portion: '150g mingau + frutas + café sem açúcar',
            calories: '~320 kcal'
        },
        ingredients: [
            '80g de aveia em flocos',
            '400ml de leite',
            '1 banana',
            '100g de morango',
            '2 colheres de sopa de mel',
            '1 colher de chá de canela',
            'Granola para finalizar'
        ],
        instructions: [
            'Ferva o leite em uma panela',
            'Adicione a aveia e mexa bem',
            'Cozinhe em fogo baixo por 10 minutos mexendo sempre',
            'Adicione mel e canela',
            'Corte as frutas em pedaços',
            'Sirva o mingau com as frutas e granola por cima'
        ],
        tips: 'Mingau quente é perfeito para dias frios. Varie as frutas conforme a estação.'
    },
    'breakfast-6': {
        title: 'Omelete de Claras com Vegetais',
        description: 'Leve e rica em proteínas',
        husband: {
            portion: '1 omelete (4 claras + 1 ovo) + 2 fatias pão + abacate',
            calories: '~520 kcal'
        },
        wife: {
            portion: '1 omelete (3 claras) + 1 fatia pão + café sem açúcar',
            calories: '~280 kcal'
        },
        ingredients: [
            '7 claras de ovo',
            '1 ovo inteiro (para ele)',
            '1 tomate pequeno',
            '50g de espinafre',
            '30g de queijo cottage',
            '1 colher de sopa de azeite',
            'Sal e pimenta a gosto',
            'Pão integral para acompanhar'
        ],
        instructions: [
            'Pique o tomate e refogue com pouco azeite',
            'Adicione o espinafre e tempere',
            'Bata as claras com sal e pimenta',
            'Despeje na frigideira quente',
            'Adicione os vegetais e queijo cottage',
            'Dobre ao meio e sirva com pão integral'
        ],
        tips: 'Claras são ricas em proteína e baixas em calorias. Perfeito para quem quer emagrecer.'
    },
    // Receitas de Lanche da Manhã
    'morning-1': {
        title: 'Iogurte com Granola Caseira',
        description: 'Probióticos e fibras',
        husband: {
            portion: '200g iogurte + 50g granola + 1 banana + 20g mel',
            calories: '~480 kcal'
        },
        wife: {
            portion: '150g iogurte + 30g granola + 1/2 banana',
            calories: '~280 kcal'
        },
        ingredients: [
            '350g de iogurte natural',
            '80g de granola caseira',
            '1 banana',
            '20g de mel',
            '30g de castanhas mistas',
            '20g de uvas passas'
        ],
        instructions: [
            'Corte a banana em fatias',
            'Em um pote, coloque o iogurte',
            'Adicione a granola por cima',
            'Decore com fatias de banana',
            'Regue com mel a gosto',
            'Finalize com castanhas e uvas passas'
        ],
        tips: 'Iogurte natural é rico em probióticos que ajudam na digestão. Granola caseira é mais saudável.'
    },
    'morning-2': {
        title: 'Mix de Castanhas e Frutas',
        description: 'Gorduras boas e vitaminas',
        husband: {
            portion: '40g mix castanhas + 1 maçã + 1 pera + água',
            calories: '~420 kcal'
        },
        wife: {
            portion: '25g mix castanhas + 1 maçã + chá verde',
            calories: '~250 kcal'
        },
        ingredients: [
            '30g de castanha do pará',
            '20g de amêndoas',
            '15g de nozes',
            '2 maçãs',
            '1 pera (para ele)',
            'Chá verde ou água'
        ],
        instructions: [
            'Lave bem as frutas',
            'Corte em fatias ou cubos',
            'Misture as castanhas em um pote',
            'Sirva as frutas em um prato',
            'Coma intercalando castanhas e frutas',
            'Acompanhe com chá verde ou água'
        ],
        tips: 'Castanhas são ricas em ômega-3 e vitamina E. Não exagere na quantidade por serem calóricas.'
    },
    'morning-3': {
        title: 'Smoothie Verde Detox',
        description: 'Antioxidantes naturais',
        husband: {
            portion: '400ml smoothie + 2 biscoitos integrais',
            calories: '~380 kcal'
        },
        wife: {
            portion: '300ml smoothie',
            calories: '~180 kcal'
        },
        ingredients: [
            '1 maçã verde',
            '100g de espinafre fresco',
            '1/2 pepino',
            '1 limão (suco)',
            '200ml de água de coco',
            '1 colher de chá de gengibre',
            'Gelo a gosto'
        ],
        instructions: [
            'Lave bem todos os vegetais',
            'Descasque a maçã e corte em pedaços',
            'Corte o pepino em fatias',
            'Bata tudo no liquidificador',
            'Adicione gelo se preferir gelado',
            'Coe se preferir textura mais lisa'
        ],
        tips: 'Rico em clorofila e antioxidantes. O gengibre acelera o metabolismo.'
    },
    'morning-4': {
        title: 'Torrada Integral com Abacate',
        description: 'Gorduras saudáveis',
        husband: {
            portion: '2 fatias pão + 1 abacate + 1 ovo + tomate',
            calories: '~520 kcal'
        },
        wife: {
            portion: '1 fatia pão + 1/2 abacate + tomate + chá',
            calories: '~280 kcal'
        },
        ingredients: [
            '3 fatias de pão integral',
            '1 abacate maduro',
            '1 ovo (para ele)',
            '1 tomate',
            'Sal e pimenta a gosto',
            'Azeite extra virgem',
            'Limão'
        ],
        instructions: [
            'Torre o pão integral',
            'Amasse o abacate com garfo',
            'Tempere com sal, pimenta e limão',
            'Espalhe o abacate no pão',
            'Adicione fatias de tomate',
            'Para ele: adicione ovo cozido ou pochê'
        ],
        tips: 'Abacate é rico em gorduras monoinsaturadas que fazem bem ao coração.'
    },
    'morning-5': {
        title: 'Vitamina de Banana com Aveia',
        description: 'Energia duradoura',
        husband: {
            portion: '400ml vitamina + 1 pão francês integral',
            calories: '~520 kcal'
        },
        wife: {
            portion: '300ml vitamina',
            calories: '~280 kcal'
        },
        ingredients: [
            '2 bananas',
            '300ml de leite',
            '3 colheres de sopa de aveia',
            '1 colher de sopa de mel',
            '1 colher de chá de canela',
            'Gelo a gosto'
        ],
        instructions: [
            'Descasque as bananas',
            'Bata todos os ingredientes no liquidificador',
            'Adicione gelo se preferir gelado',
            'Bata até ficar cremoso',
            'Sirva imediatamente',
            'Polvilhe canela por cima'
        ],
        tips: 'Banana fornece potássio e energia rápida. Aveia dá saciedade prolongada.'
    },
    'morning-6': {
        title: 'Queijo Cottage com Mel',
        description: 'Proteína e doçura natural',
        husband: {
            portion: '150g cottage + 30ml mel + frutas + torradas',
            calories: '~480 kcal'
        },
        wife: {
            portion: '100g cottage + 15ml mel + frutas',
            calories: '~220 kcal'
        },
        ingredients: [
            '250g de queijo cottage',
            '45ml de mel',
            '1 pêssego',
            '100g de morangos',
            '2 fatias de pão integral (para ele)',
            'Canela em pó'
        ],
        instructions: [
            'Corte o pêssego em fatias',
            'Corte os morangos ao meio',
            'Coloque o cottage em tigelas',
            'Regue com mel',
            'Decore com as frutas',
            'Polvilhe canela e sirva'
        ],
        tips: 'Cottage é rico em caseína, proteína de absorção lenta ideal para lanches.'
    },
    // Receitas de Lanche da Tarde
    'afternoon-1': {
        title: 'Chá Verde com Castanhas',
        description: 'Antioxidantes e energia',
        husband: {
            portion: '1 xícara chá + 40g castanhas + 2 biscoitos integrais',
            calories: '~380 kcal'
        },
        wife: {
            portion: '1 xícara chá + 25g castanhas',
            calories: '~180 kcal'
        },
        ingredients: [
            '2 sachês de chá verde',
            '400ml de água',
            '30g de castanha do pará',
            '20g de amêndoas',
            '15g de nozes',
            '4 biscoitos integrais (para ele)',
            'Mel a gosto (opcional)'
        ],
        instructions: [
            'Ferva a água',
            'Adicione o chá verde e deixe em infusão por 3 minutos',
            'Coe e adoce com mel se desejar',
            'Sirva o chá quente',
            'Acompanhe com o mix de castanhas',
            'Para ele: adicione biscoitos integrais'
        ],
        tips: 'Chá verde é rico em antioxidantes e acelera o metabolismo. Não beba muito próximo às refeições.'
    },
    'afternoon-2': {
        title: 'Frutas com Pasta de Amendoim',
        description: 'Doce natural e proteína',
        husband: {
            portion: '1 maçã + 1 banana + 30g pasta amendoim',
            calories: '~420 kcal'
        },
        wife: {
            portion: '1 maçã + 15g pasta amendoim',
            calories: '~180 kcal'
        },
        ingredients: [
            '2 maçãs',
            '1 banana (para ele)',
            '45g de pasta de amendoim integral',
            'Canela em pó',
            'Água'
        ],
        instructions: [
            'Lave e corte as maçãs em fatias',
            'Corte a banana em rodelas',
            'Sirva as frutas em pratos',
            'Acompanhe com pasta de amendoim',
            'Polvilhe canela sobre as frutas',
            'Beba água durante o lanche'
        ],
        tips: 'Pasta de amendoim integral é rica em proteína e gorduras boas. Escolha sem açúcar adicionado.'
    },
    'afternoon-3': {
        title: 'Iogurte Grego com Mel',
        description: 'Cremoso e probiótico',
        husband: {
            portion: '200g iogurte + 30ml mel + granola + frutas',
            calories: '~450 kcal'
        },
        wife: {
            portion: '150g iogurte + 15ml mel + frutas',
            calories: '~220 kcal'
        },
        ingredients: [
            '350g de iogurte grego',
            '45ml de mel',
            '100g de frutas vermelhas',
            '30g de granola (para ele)',
            '20g de amêndoas laminadas'
        ],
        instructions: [
            'Coloque o iogurte em tigelas',
            'Regue com mel',
            'Adicione as frutas vermelhas',
            'Para ele: adicione granola',
            'Finalize com amêndoas laminadas',
            'Sirva gelado'
        ],
        tips: 'Iogurte grego tem mais proteína que o comum. Frutas vermelhas são ricas em antioxidantes.'
    },
    'afternoon-4': {
        title: 'Sanduíche Natural Light',
        description: 'Leve e saboroso',
        husband: {
            portion: '2 fatias pão + peito peru + queijo + salada',
            calories: '~420 kcal'
        },
        wife: {
            portion: '1 fatia pão + peito peru + salada + chá',
            calories: '~220 kcal'
        },
        ingredients: [
            '3 fatias de pão integral',
            '100g de peito de peru',
            '30g de queijo branco',
            '2 folhas de alface',
            '1 tomate',
            '1/2 pepino',
            'Azeite e vinagre'
        ],
        instructions: [
            'Torre levemente o pão',
            'Lave e seque as folhas de alface',
            'Corte o tomate e pepino em fatias',
            'Monte o sanduíche com todos os ingredientes',
            'Tempere a salada com azeite e vinagre',
            'Corte ao meio e sirva'
        ],
        tips: 'Peito de peru é uma proteína magra. Adicione bastante salada para aumentar as fibras.'
    },
    'afternoon-5': {
        title: 'Vitamina de Frutas Vermelhas',
        description: 'Antioxidantes poderosos',
        husband: {
            portion: '400ml vitamina + 2 torradas + geleia',
            calories: '~480 kcal'
        },
        wife: {
            portion: '300ml vitamina',
            calories: '~180 kcal'
        },
        ingredients: [
            '150g de morangos',
            '100g de framboesas',
            '50g de mirtilos',
            '200ml de leite',
            '1 colher de sopa de mel',
            '2 fatias de pão integral (para ele)',
            'Geleia diet (para ele)'
        ],
        instructions: [
            'Lave bem todas as frutas vermelhas',
            'Bata no liquidificador com leite e mel',
            'Adicione gelo se preferir gelado',
            'Sirva imediatamente',
            'Para ele: acompanhe com torradas e geleia',
            'Decore com frutas frescas'
        ],
        tips: 'Frutas vermelhas são ricas em antocianinas, poderosos antioxidantes anti-inflamatórios.'
    },
    'afternoon-6': {
        title: 'Mix de Sementes e Frutas Secas',
        description: 'Minerais e energia',
        husband: {
            portion: '50g mix + 1 banana + água de coco',
            calories: '~450 kcal'
        },
        wife: {
            portion: '30g mix + chá de ervas',
            calories: '~180 kcal'
        },
        ingredients: [
            '30g de sementes de girassol',
            '20g de sementes de abóbora',
            '15g de uvas passas',
            '15g de damascos secos',
            '1 banana (para ele)',
            '200ml de água de coco (para ele)',
            'Chá de ervas (para ela)'
        ],
        instructions: [
            'Misture todas as sementes e frutas secas',
            'Armazene em pote hermético',
            'Sirva a porção adequada',
            'Para ele: acompanhe com banana e água de coco',
            'Para ela: sirva com chá de ervas',
            'Mastigue bem para melhor digestão'
        ],
        tips: 'Sementes são ricas em zinco, magnésio e fibras. Frutas secas fornecem energia rápida.'
    }
};

// Base de receitas para almoço e jantar por proteína e método
const proteinRecipes = {
    'carne-bovina': {
        frito: [
            {
                id: 'beef-fried-1',
                title: 'Bife Grelhado com Cebola Caramelizada',
                preview: 'Suculento e saboroso'
            },
            {
                id: 'beef-fried-2',
                title: 'Carne de Panela Refogada',
                preview: 'Macia e temperada'
            },
            {
                id: 'beef-fried-3',
                title: 'Bife Acebolado Tradicional',
                preview: 'Clássico brasileiro'
            },
            {
                id: 'beef-fried-4',
                title: 'Carne Refogada com Pimentão',
                preview: 'Colorida e nutritiva'
            },
            {
                id: 'beef-fried-5',
                title: 'Bife na Chapa com Alho',
                preview: 'Simples e delicioso'
            },
            {
                id: 'beef-fried-6',
                title: 'Carne Salteada com Vegetais',
                preview: 'Rápida e saudável'
            }
        ],
        assado: [
            {
                id: 'beef-baked-1',
                title: 'Carne Assada com Batatas',
                preview: 'Domingo em família'
            },
            {
                id: 'beef-baked-2',
                title: 'Rosbife com Ervas Finas',
                preview: 'Sofisticado e aromático'
            },
            {
                id: 'beef-baked-3',
                title: 'Carne Assada com Legumes',
                preview: 'Completa e nutritiva'
            },
            {
                id: 'beef-baked-4',
                title: 'Alcatra Assada com Cebolas',
                preview: 'Suculenta e macia'
            },
            {
                id: 'beef-baked-5',
                title: 'Carne Assada com Mandioca',
                preview: 'Raiz brasileira'
            },
            {
                id: 'beef-baked-6',
                title: 'Maminha Assada com Alecrim',
                preview: 'Aromática e saborosa'
            }
        ]
    },
    'carne-moida': {
        frito: [
            {
                id: 'ground-beef-fried-1',
                title: 'Carne Moída Refogada Tradicional',
                preview: 'Tempero caseiro'
            },
            {
                id: 'ground-beef-fried-2',
                title: 'Carne Moída com Abobrinha',
                preview: 'Leve e nutritiva'
            },
            {
                id: 'ground-beef-fried-3',
                title: 'Carne Moída com Berinjela',
                preview: 'Mediterrânea'
            },
            {
                id: 'ground-beef-fried-4',
                title: 'Carne Moída com Chuchu',
                preview: 'Econômica e saborosa'
            },
            {
                id: 'ground-beef-fried-5',
                title: 'Carne Moída com Cenoura',
                preview: 'Rica em betacaroteno'
            },
            {
                id: 'ground-beef-fried-6',
                title: 'Carne Moída com Vagem',
                preview: 'Verde e crocante'
            }
        ],
        assado: [
            {
                id: 'ground-beef-baked-1',
                title: 'Carne Moída Gratinada',
                preview: 'Com queijo dourado'
            },
            {
                id: 'ground-beef-baked-2',
                title: 'Escondidinho de Carne Moída',
                preview: 'Purê cremoso por cima'
            },
            {
                id: 'ground-beef-baked-3',
                title: 'Carne Moída com Batata Doce',
                preview: 'Doce e nutritiva'
            },
            {
                id: 'ground-beef-baked-4',
                title: 'Torta de Carne Moída',
                preview: 'Massa crocante'
            },
            {
                id: 'ground-beef-baked-5',
                title: 'Carne Moída no Papillote',
                preview: 'Vapor concentrado'
            },
            {
                id: 'ground-beef-baked-6',
                title: 'Almôndegas Assadas',
                preview: 'Macias e suculentas'
            }
        ]
    },
    'peito-frango': {
        frito: [
            {
                id: 'chicken-fried-1',
                title: 'Frango Grelhado com Limão',
                preview: 'Cítrico e refrescante'
            },
            {
                id: 'chicken-fried-2',
                title: 'Frango na Frigideira com Ervas',
                preview: 'Aromático e saboroso'
            },
            {
                id: 'chicken-fried-3',
                title: 'Frango Salteado com Legumes',
                preview: 'Colorido e nutritivo'
            },
            {
                id: 'chicken-fried-4',
                title: 'Frango Grelhado com Alho',
                preview: 'Simples e delicioso'
            },
            {
                id: 'chicken-fried-5',
                title: 'Frango com Pimentão',
                preview: 'Doce e crocante'
            },
            {
                id: 'chicken-fried-6',
                title: 'Frango Refogado com Cebola',
                preview: 'Clássico e suculento'
            }
        ],
        assado: [
            {
                id: 'chicken-baked-1',
                title: 'Frango Assado com Batatas',
                preview: 'Dourado e crocante'
            },
            {
                id: 'chicken-baked-2',
                title: 'Frango com Legumes no Papillote',
                preview: 'Vapor preserva nutrientes'
            },
            {
                id: 'chicken-baked-3',
                title: 'Frango Assado com Ervas',
                preview: 'Mediterrâneo'
            },
            {
                id: 'chicken-baked-4',
                title: 'Frango Gratinado com Queijo',
                preview: 'Cremoso e dourado'
            },
            {
                id: 'chicken-baked-5',
                title: 'Frango Assado com Alecrim',
                preview: 'Aromático e saboroso'
            },
            {
                id: 'chicken-baked-6',
                title: 'Frango Assado com Cebola Caramelizada',
                preview: 'Doce e aromático'
            }
        ]
    },
    'file-tilapia': {
        frito: [
            {
                id: 'tilapia-fried-1',
                title: 'Tilápia Grelhada com Limão',
                preview: 'Leve e cítrica'
            },
            {
                id: 'tilapia-fried-2',
                title: 'Tilápia na Frigideira com Alho',
                preview: 'Aromática e dourada'
            },
            {
                id: 'tilapia-fried-3',
                title: 'Tilápia com Ervas Finas',
                preview: 'Delicada e perfumada'
            },
            {
                id: 'tilapia-fried-4',
                title: 'Tilápia com Molho de Tomate',
                preview: 'Fresca e saborosa'
            },
            {
                id: 'tilapia-fried-5',
                title: 'Tilápia Empanada Light',
                preview: 'Crocante e dourada'
            },
            {
                id: 'tilapia-fried-6',
                title: 'Tilápia com Legumes Salteados',
                preview: 'Colorida e nutritiva'
            }
        ],
        assado: [
            {
                id: 'tilapia-baked-1',
                title: 'Tilápia Assada com Batatas',
                preview: 'Dourada e aromática'
            },
            {
                id: 'tilapia-baked-2',
                title: 'Tilápia no Papillote',
                preview: 'Vapor concentra sabores'
            },
            {
                id: 'tilapia-baked-3',
                title: 'Tilápia Gratinada',
                preview: 'Queijo dourado por cima'
            },
            {
                id: 'tilapia-baked-4',
                title: 'Tilápia com Crosta de Ervas',
                preview: 'Aromática e crocante'
            },
            {
                id: 'tilapia-baked-5',
                title: 'Tilápia com Temperos Naturais',
                preview: 'Saudável e saborosa'
            },
            {
                id: 'tilapia-baked-6',
                title: 'Tilápia Assada com Legumes',
                preview: 'Colorida e nutritiva'
            }
        ]
    },
    'posta-tilapia': {
        frito: [
            {
                id: 'tilapia-steak-fried-1',
                title: 'Posta de Tilápia Grelhada',
                preview: 'Suculenta e saborosa'
            },
            {
                id: 'tilapia-steak-fried-2',
                title: 'Posta com Cebola Caramelizada',
                preview: 'Doce e salgado'
            },
            {
                id: 'tilapia-steak-fried-3',
                title: 'Posta Empanada',
                preview: 'Crocante por fora'
            },
            {
                id: 'tilapia-steak-fried-4',
                title: 'Posta com Molho',
                preview: 'Saborosa e suculenta'
            },
            {
                id: 'tilapia-steak-fried-5',
                title: 'Posta com Legumes',
                preview: 'Colorida e nutritiva'
            },
            {
                id: 'tilapia-steak-fried-6',
                title: 'Posta com Ervas',
                preview: 'Aromática e delicada'
            }
        ],
        assado: [
            {
                id: 'tilapia-steak-baked-1',
                title: 'Posta Assada com Batatas',
                preview: 'Dourada e suculenta'
            },
            {
                id: 'tilapia-steak-baked-2',
                title: 'Posta no Papillote',
                preview: 'Vapor concentrado'
            },
            {
                id: 'tilapia-steak-baked-3',
                title: 'Posta Gratinada',
                preview: 'Cremosa e dourada'
            },
            {
                id: 'tilapia-steak-baked-4',
                title: 'Posta com Crosta',
                preview: 'Crocante e aromática'
            },
            {
                id: 'tilapia-steak-baked-5',
                title: 'Posta com Temperos Especiais',
                preview: 'Aromática e deliciosa'
            },
            {
                id: 'tilapia-steak-baked-6',
                title: 'Posta com Legumes',
                preview: 'Colorida e nutritiva'
            }
        ]
    }
};

// Receitas detalhadas para as proteínas
const detailedProteinRecipes = {
    'beef-fried-1': {
        title: 'Bife Grelhado com Cebola Caramelizada',
        description: 'Suculento e saboroso',
        husband: {
            portion: '180g bife + 100g arroz integral + salada',
            calories: '~620 kcal'
        },
        wife: {
            portion: '120g bife + 50g arroz integral + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Bife Grelhado com Cebola Caramelizada',
                totalWeight: '300g de bife (patinho ou alcatra)',
                ingredients: [
                    '300g de bife (patinho ou alcatra)',
                    '2 cebolas grandes (300g)',
                    '3 colheres de sopa de azeite (45ml)',
                    '2 dentes de alho',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino'
                ],
                instructions: [
                    'Tempere os bifes com sal, pimenta e alho amassado',
                    'Corte as cebolas em fatias',
                    'Aqueça 2 colheres de azeite e grelhe os bifes por 3-4 min cada lado',
                    'Reserve os bifes e mantenha aquecidos',
                    'Na mesma frigideira, refogue as cebolas com 1 colher de azeite',
                    'Cozinhe até caramelizar (10-15 minutos)',
                    'Sirva os bifes cobertos com a cebola caramelizada'
                ]
            },
            carbohydrate: {
                name: 'Arroz Integral',
                totalWeight: '150g de arroz cru (rende ~450g cozido)',
                ingredients: [
                    '150g de arroz integral',
                    '300ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de azeite'
                ],
                instructions: [
                    'Lave o arroz até a água sair limpa',
                    'Em uma panela, aqueça o azeite e refogue o arroz por 2 minutos',
                    'Adicione a água e o sal',
                    'Cozinhe em fogo baixo por 40-45 minutos até absorver a água'
                ]
            },
            salad: {
                name: 'Salada Verde Mista',
                totalWeight: '400g de vegetais',
                ingredients: [
                    '200g de alface americana',
                    '100g de rúcula',
                    '100g de tomate cereja',
                    '2 colheres de sopa de azeite extra virgem',
                    '1 colher de sopa de vinagre ou limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem todas as folhas e seque',
                    'Corte os tomates cereja ao meio',
                    'Misture as folhas em uma saladeira',
                    'Tempere com azeite, vinagre e sal na hora de servir'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de bife com cebola',
                    carbohydrate: '150g de arroz integral cozido',
                    salad: '150g de salada'
                },
                wife: {
                    protein: '120g de bife com cebola',
                    carbohydrate: '75g de arroz integral cozido',
                    salad: '250g de salada'
                }
            }
        },
        tips: 'A cebola caramelizada adiciona doçura natural ao prato. Deixe o bife descansar antes de servir para manter os sucos.'
    },
    'beef-fried-2': {
        title: 'Carne de Panela Refogada',
        description: 'Macia e temperada',
        husband: {
            portion: '200g carne + 120g arroz + salada',
            calories: '~650 kcal'
        },
        wife: {
            portion: '150g carne + 80g arroz + salada abundante',
            calories: '~420 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne de Panela Refogada',
                totalWeight: '350g de carne (músculo ou acém)',
                ingredients: [
                    '350g de carne (músculo ou acém)',
                    '1 cebola média (150g)',
                    '2 tomates médios (200g)',
                    '3 dentes de alho',
                    '2 colheres de sopa de óleo',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 folha de louro',
                    '200ml de água'
                ],
                instructions: [
                    'Corte a carne em cubos médios',
                    'Tempere com sal, pimenta e alho amassado',
                    'Aqueça o óleo e doure a carne por todos os lados',
                    'Adicione a cebola picada e refogue',
                    'Acrescente o tomate picado e o louro',
                    'Adicione água, tampe e cozinhe por 40 minutos',
                    'Mexa ocasionalmente até a carne ficar macia'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco Soltinho',
                totalWeight: '130g de arroz cru (rende ~390g cozido)',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de óleo'
                ],
                instructions: [
                    'Lave o arroz até a água sair limpa',
                    'Aqueça o óleo e refogue o arroz por 2 minutos',
                    'Adicione a água e o sal',
                    'Cozinhe em fogo baixo por 18 minutos',
                    'Deixe descansar por 5 minutos antes de servir'
                ]
            },
            salad: {
                name: 'Salada de Alface com Tomate',
                totalWeight: '350g de vegetais',
                ingredients: [
                    '250g de alface crespa',
                    '100g de tomate',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas de alface',
                    'Corte os tomates em fatias',
                    'Misture em uma saladeira',
                    'Tempere na hora de servir'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de carne refogada',
                    carbohydrate: '150g de arroz cozido',
                    salad: '120g de salada'
                },
                wife: {
                    protein: '150g de carne refogada',
                    carbohydrate: '100g de arroz cozido',
                    salad: '230g de salada'
                }
            }
        },
        tips: 'Deixe a carne cozinhar em fogo baixo para ficar bem macia. O tempo de cozimento pode variar conforme o corte.'
    },
    'ground-beef-fried-1': {
        title: 'Carne Moída Refogada Tradicional',
        description: 'Tempero caseiro',
        husband: {
            portion: '150g carne moída + 120g arroz + salada',
            calories: '~580 kcal'
        },
        wife: {
            portion: '100g carne moída + 80g arroz + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Moída Refogada Tradicional',
                totalWeight: '250g de carne moída',
                ingredients: [
                    '250g de carne moída',
                    '1 cebola média (150g)',
                    '2 tomates médios (200g)',
                    '3 dentes de alho',
                    '2 colheres de sopa de óleo',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 colher de sopa de salsinha picada'
                ],
                instructions: [
                    'Aqueça o óleo e refogue o alho e a cebola',
                    'Adicione a carne moída e refogue bem',
                    'Tempere com sal e pimenta',
                    'Acrescente o tomate picado',
                    'Cozinhe por 15 minutos mexendo ocasionalmente',
                    'Finalize com salsinha picada'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco Tradicional',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de óleo'
                ],
                instructions: [
                    'Lave o arroz até a água sair limpa',
                    'Refogue com óleo por 2 minutos',
                    'Adicione água e sal',
                    'Cozinhe por 18 minutos em fogo baixo'
                ]
            },
            salad: {
                name: 'Salada Verde Simples',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de alface',
                    '100g de pepino',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave e corte as folhas',
                    'Corte o pepino em fatias',
                    'Misture e tempere na hora de servir'
                ]
            },
            portions: {
                husband: {
                    protein: '150g de carne moída',
                    carbohydrate: '150g de arroz',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '100g de carne moída',
                    carbohydrate: '100g de arroz',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Refogue bem a carne moída para eliminar a água e concentrar o sabor. Use carne moída fresca para melhor resultado.'
    },
    'chicken-fried-1': {
        title: 'Frango Grelhado com Limão',
        description: 'Cítrico e refrescante',
        husband: {
            portion: '180g frango + 120g arroz + salada',
            calories: '~550 kcal'
        },
        wife: {
            portion: '120g frango + 80g arroz + salada abundante',
            calories: '~350 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Frango Grelhado com Limão',
                totalWeight: '300g de peito de frango',
                ingredients: [
                    '300g de peito de frango',
                    '2 limões (suco)',
                    '3 dentes de alho',
                    '2 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 colher de chá de orégano'
                ],
                instructions: [
                    'Corte o frango em filés',
                    'Tempere com sal, pimenta, alho e orégano',
                    'Regue com suco de limão e azeite',
                    'Deixe marinar por 30 minutos',
                    'Grelhe por 6-8 minutos cada lado',
                    'Sirva com fatias de limão'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco com Alho',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '2 dentes de alho',
                    '1 colher de sopa de óleo',
                    '1 colher de chá de sal'
                ],
                instructions: [
                    'Refogue o alho no óleo',
                    'Adicione o arroz e refogue',
                    'Acrescente água e sal',
                    'Cozinhe por 18 minutos'
                ]
            },
            salad: {
                name: 'Salada Refrescante',
                totalWeight: '350g de vegetais',
                ingredients: [
                    '150g de alface',
                    '100g de rúcula',
                    '100g de tomate cereja',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas',
                    'Corte os tomates ao meio',
                    'Misture e tempere com azeite e limão'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de frango grelhado',
                    carbohydrate: '150g de arroz',
                    salad: '120g de salada'
                },
                wife: {
                    protein: '120g de frango grelhado',
                    carbohydrate: '100g de arroz',
                    salad: '230g de salada'
                }
            }
        },
        tips: 'O limão ajuda a amaciar a carne e dá um sabor fresco. Não deixe marinar por mais de 1 hora para não "cozinhar" a carne.'
    },
    // Receitas de Carne Bovina Faltantes
    'beef-fried-3': {
        title: 'Bife Acebolado Tradicional',
        description: 'Clássico brasileiro',
        husband: {
            portion: '180g bife + 120g arroz + feijão + salada',
            calories: '~680 kcal'
        },
        wife: {
            portion: '120g bife + 80g arroz + feijão + salada abundante',
            calories: '~420 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Bife Acebolado Tradicional',
                totalWeight: '300g de bife (alcatra ou patinho)',
                ingredients: [
                    '300g de bife (alcatra ou patinho)',
                    '2 cebolas grandes (400g)',
                    '3 colheres de sopa de óleo',
                    '3 dentes de alho',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 colher de sopa de molho inglês'
                ],
                instructions: [
                    'Tempere os bifes com sal, pimenta e alho',
                    'Corte as cebolas em fatias grossas',
                    'Aqueça o óleo e frite os bifes por 3 minutos cada lado',
                    'Reserve os bifes',
                    'Na mesma frigideira, refogue as cebolas até dourar',
                    'Adicione molho inglês e misture',
                    'Volte os bifes à frigideira por 2 minutos'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco com Feijão',
                totalWeight: '130g arroz + 100g feijão cru',
                ingredients: [
                    '130g de arroz branco',
                    '100g de feijão carioca',
                    '1 cebola pequena',
                    '2 dentes de alho',
                    '2 colheres de sopa de óleo',
                    'Sal a gosto'
                ],
                instructions: [
                    'Cozinhe o feijão na panela de pressão por 20 minutos',
                    'Refogue cebola e alho no óleo',
                    'Adicione o arroz e refogue por 2 minutos',
                    'Acrescente água e sal, cozinhe por 18 minutos',
                    'Tempere o feijão com o refogado restante'
                ]
            },
            salad: {
                name: 'Salada de Alface e Tomate',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de alface americana',
                    '100g de tomate',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave e corte a alface',
                    'Corte os tomates em fatias',
                    'Misture em uma saladeira',
                    'Tempere com azeite, vinagre e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de bife acebolado',
                    carbohydrate: '120g arroz + 80g feijão',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '120g de bife acebolado',
                    carbohydrate: '80g arroz + 60g feijão',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'O molho inglês realça o sabor da carne. Cebola bem dourada fica mais doce e saborosa.'
    },
    'beef-baked-1': {
        title: 'Carne Assada com Batatas',
        description: 'Domingo em família',
        husband: {
            portion: '200g carne + 150g batata + legumes + salada',
            calories: '~720 kcal'
        },
        wife: {
            portion: '150g carne + 100g batata + legumes + salada abundante',
            calories: '~480 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Assada com Batatas',
                totalWeight: '350g de carne (maminha ou alcatra)',
                ingredients: [
                    '350g de carne (maminha ou alcatra)',
                    '500g de batatas',
                    '2 cenouras',
                    '1 cebola grande',
                    '4 dentes de alho',
                    '3 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    '1 colher de chá de pimenta do reino',
                    '2 folhas de louro',
                    'Alecrim fresco'
                ],
                instructions: [
                    'Tempere a carne com sal, pimenta e alho',
                    'Descasque e corte as batatas em pedaços grandes',
                    'Corte as cenouras em bastões',
                    'Corte a cebola em fatias grossas',
                    'Coloque tudo em uma assadeira',
                    'Regue com azeite e temperos',
                    'Asse a 200°C por 1 hora e 30 minutos'
                ]
            },
            carbohydrate: {
                name: 'Batatas Assadas',
                totalWeight: 'Incluído no preparo principal',
                ingredients: ['Incluído no preparo da carne'],
                instructions: ['Assadas junto com a carne']
            },
            salad: {
                name: 'Salada Verde Mista',
                totalWeight: '350g de vegetais',
                ingredients: [
                    '200g de rúcula',
                    '100g de agrião',
                    '50g de tomate cereja',
                    '2 colheres de sopa de azeite extra virgem',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas',
                    'Corte os tomates ao meio',
                    'Misture tudo em uma saladeira',
                    'Tempere com azeite, limão e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de carne assada',
                    carbohydrate: '150g de batatas e legumes',
                    salad: '120g de salada'
                },
                wife: {
                    protein: '150g de carne assada',
                    carbohydrate: '100g de batatas e legumes',
                    salad: '230g de salada'
                }
            }
        },
        tips: 'Asse em temperatura alta no início para selar a carne, depois reduza. Use termômetro para ponto ideal.'
    },
    // Mais receitas de carne moída
    'ground-beef-fried-2': {
        title: 'Carne Moída com Abobrinha',
        description: 'Leve e nutritiva',
        husband: {
            portion: '150g carne moída + 120g arroz + abobrinha + salada',
            calories: '~580 kcal'
        },
        wife: {
            portion: '100g carne moída + 80g arroz + abobrinha + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Moída com Abobrinha',
                totalWeight: '250g de carne moída + 300g abobrinha',
                ingredients: [
                    '250g de carne moída',
                    '300g de abobrinha',
                    '1 cebola média',
                    '2 tomates',
                    '3 dentes de alho',
                    '2 colheres de sopa de óleo',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    'Salsinha picada'
                ],
                instructions: [
                    'Corte a abobrinha em cubos pequenos',
                    'Refogue alho e cebola no óleo',
                    'Adicione a carne moída e refogue bem',
                    'Acrescente os tomates picados',
                    'Adicione a abobrinha e temperos',
                    'Cozinhe por 15 minutos até a abobrinha amolecer',
                    'Finalize com salsinha'
                ]
            },
            carbohydrate: {
                name: 'Arroz Integral',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz integral',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de azeite'
                ],
                instructions: [
                    'Lave o arroz até a água sair limpa',
                    'Refogue com azeite por 2 minutos',
                    'Adicione água e sal',
                    'Cozinhe por 40 minutos em fogo baixo'
                ]
            },
            salad: {
                name: 'Salada de Folhas Verdes',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de alface',
                    '100g de rúcula',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas',
                    'Misture em uma saladeira',
                    'Tempere com azeite, limão e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '150g de carne moída com abobrinha',
                    carbohydrate: '150g de arroz integral',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '100g de carne moída com abobrinha',
                    carbohydrate: '100g de arroz integral',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Abobrinha é rica em água e fibras, tornando o prato mais leve e nutritivo.'
    },
    // Mais receitas de frango
    'chicken-fried-2': {
        title: 'Frango na Frigideira com Ervas',
        description: 'Aromático e saboroso',
        husband: {
            portion: '180g frango + 120g batata doce + salada',
            calories: '~580 kcal'
        },
        wife: {
            portion: '120g frango + 80g batata doce + salada abundante',
            calories: '~360 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Frango na Frigideira com Ervas',
                totalWeight: '300g de peito de frango',
                ingredients: [
                    '300g de peito de frango',
                    '2 colheres de sopa de azeite',
                    '3 dentes de alho',
                    '1 colher de chá de tomilho',
                    '1 colher de chá de alecrim',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 limão (suco)'
                ],
                instructions: [
                    'Corte o frango em filés',
                    'Tempere com sal, pimenta e ervas',
                    'Aqueça o azeite na frigideira',
                    'Doure o alho e retire',
                    'Frite o frango por 6-8 minutos cada lado',
                    'Regue com suco de limão antes de servir'
                ]
            },
            carbohydrate: {
                name: 'Batata Doce Assada',
                totalWeight: '400g de batata doce',
                ingredients: [
                    '400g de batata doce',
                    '1 colher de sopa de azeite',
                    'Sal a gosto',
                    'Páprica doce'
                ],
                instructions: [
                    'Descasque e corte a batata doce em fatias',
                    'Tempere com azeite, sal e páprica',
                    'Asse a 200°C por 25-30 minutos',
                    'Vire na metade do tempo'
                ]
            },
            salad: {
                name: 'Salada Mediterrânea',
                totalWeight: '350g de vegetais',
                ingredients: [
                    '150g de alface',
                    '100g de tomate cereja',
                    '50g de pepino',
                    '50g de azeitona preta',
                    '2 colheres de sopa de azeite extra virgem',
                    '1 colher de sopa de vinagre balsâmico',
                    'Sal e orégano'
                ],
                instructions: [
                    'Corte todos os vegetais',
                    'Misture em uma saladeira',
                    'Tempere com azeite, vinagre, sal e orégano'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de frango com ervas',
                    carbohydrate: '150g de batata doce',
                    salad: '120g de salada'
                },
                wife: {
                    protein: '120g de frango com ervas',
                    carbohydrate: '100g de batata doce',
                    salad: '230g de salada'
                }
            }
        },
        tips: 'Ervas frescas dão mais sabor. Batata doce é rica em betacaroteno e fibras.'
    },
    // Receitas de tilápia
    'tilapia-fried-1': {
        title: 'Tilápia Grelhada com Limão',
        description: 'Leve e cítrica',
        husband: {
            portion: '200g tilápia + 120g arroz + legumes + salada',
            calories: '~520 kcal'
        },
        wife: {
            portion: '150g tilápia + 80g arroz + legumes + salada abundante',
            calories: '~350 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Tilápia Grelhada com Limão',
                totalWeight: '350g de filé de tilápia',
                ingredients: [
                    '350g de filé de tilápia',
                    '2 limões (suco)',
                    '3 dentes de alho',
                    '2 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    'Salsinha picada'
                ],
                instructions: [
                    'Tempere os filés com sal, pimenta e alho',
                    'Regue com suco de limão e azeite',
                    'Deixe marinar por 15 minutos',
                    'Grelhe por 4-5 minutos cada lado',
                    'Finalize com salsinha picada'
                ]
            },
            carbohydrate: {
                name: 'Arroz com Açafrão',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de açafrão',
                    '1 colher de sopa de azeite',
                    'Sal a gosto'
                ],
                instructions: [
                    'Refogue o arroz no azeite',
                    'Adicione água, sal e açafrão',
                    'Cozinhe por 18 minutos',
                    'Deixe descansar por 5 minutos'
                ]
            },
            salad: {
                name: 'Salada de Brócolis e Cenoura',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de brócolis',
                    '100g de cenoura',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Cozinhe o brócolis no vapor por 5 minutos',
                    'Rale a cenoura crua',
                    'Misture os vegetais',
                    'Tempere com azeite, vinagre e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de tilápia grelhada',
                    carbohydrate: '150g de arroz com açafrão',
                    salad: '100g de salada de legumes'
                },
                wife: {
                    protein: '150g de tilápia grelhada',
                    carbohydrate: '100g de arroz com açafrão',
                    salad: '200g de salada de legumes'
                }
            }
        },
        tips: 'Tilápia é um peixe magro e rico em proteínas. O limão realça o sabor e ajuda na digestão.'
    },
    // Mais receitas de carne bovina
    'beef-fried-4': {
        title: 'Carne Refogada com Pimentão',
        description: 'Colorida e nutritiva',
        husband: {
            portion: '180g carne + 120g arroz + pimentão + salada',
            calories: '~620 kcal'
        },
        wife: {
            portion: '120g carne + 80g arroz + pimentão + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Refogada com Pimentão',
                totalWeight: '300g de carne + 200g pimentões',
                ingredients: [
                    '300g de carne (patinho em tiras)',
                    '1 pimentão vermelho',
                    '1 pimentão amarelo',
                    '1 cebola grande',
                    '3 dentes de alho',
                    '3 colheres de sopa de óleo',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    '1 colher de sopa de molho de soja'
                ],
                instructions: [
                    'Corte a carne em tiras finas',
                    'Corte os pimentões em tiras',
                    'Corte a cebola em fatias',
                    'Refogue o alho no óleo',
                    'Adicione a carne e doure bem',
                    'Acrescente cebola e pimentões',
                    'Tempere e refogue por 10 minutos',
                    'Finalize com molho de soja'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco Soltinho',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de óleo'
                ],
                instructions: [
                    'Lave o arroz até a água sair limpa',
                    'Refogue no óleo por 2 minutos',
                    'Adicione água e sal',
                    'Cozinhe por 18 minutos em fogo baixo'
                ]
            },
            salad: {
                name: 'Salada de Repolho com Cenoura',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de repolho roxo',
                    '100g de cenoura',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Corte o repolho em tiras finas',
                    'Rale a cenoura',
                    'Misture os vegetais',
                    'Tempere com azeite, vinagre e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de carne com pimentão',
                    carbohydrate: '150g de arroz',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '120g de carne com pimentão',
                    carbohydrate: '100g de arroz',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Pimentões são ricos em vitamina C e antioxidantes. Corte a carne contra as fibras para ficar mais macia.'
    },
    'chicken-baked-1': {
        title: 'Frango Assado com Batatas',
        description: 'Dourado e crocante',
        husband: {
            portion: '200g frango + 150g batata + legumes + salada',
            calories: '~680 kcal'
        },
        wife: {
            portion: '150g frango + 100g batata + legumes + salada abundante',
            calories: '~450 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Frango Assado com Batatas',
                totalWeight: '350g de frango + 400g batatas',
                ingredients: [
                    '350g de peito de frango',
                    '400g de batatas',
                    '2 cenouras',
                    '1 cebola',
                    '4 dentes de alho',
                    '3 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    '1 colher de chá de páprica',
                    'Tomilho e alecrim'
                ],
                instructions: [
                    'Tempere o frango com sal, páprica e ervas',
                    'Corte as batatas em pedaços',
                    'Corte cenouras e cebola',
                    'Coloque tudo em uma assadeira',
                    'Regue com azeite e temperos',
                    'Asse a 200°C por 45 minutos',
                    'Vire o frango na metade do tempo'
                ]
            },
            carbohydrate: {
                name: 'Batatas Assadas',
                totalWeight: 'Incluído no preparo principal',
                ingredients: ['Incluído no preparo do frango'],
                instructions: ['Assadas junto com o frango']
            },
            salad: {
                name: 'Salada Verde com Tomate',
                totalWeight: '350g de vegetais',
                ingredients: [
                    '200g de alface',
                    '100g de rúcula',
                    '50g de tomate cereja',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas',
                    'Corte os tomates ao meio',
                    'Misture em uma saladeira',
                    'Tempere com azeite, limão e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de frango assado',
                    carbohydrate: '150g de batatas e legumes',
                    salad: '120g de salada'
                },
                wife: {
                    protein: '150g de frango assado',
                    carbohydrate: '100g de batatas e legumes',
                    salad: '230g de salada'
                }
            }
        },
        tips: 'Asse em temperatura alta para dourar bem. Use termômetro para garantir que o frango esteja bem cozido.'
    },
    'ground-beef-baked-1': {
        title: 'Carne Moída Gratinada',
        description: 'Com queijo dourado',
        husband: {
            portion: '150g carne gratinada + 120g arroz + salada',
            calories: '~650 kcal'
        },
        wife: {
            portion: '100g carne gratinada + 80g arroz + salada abundante',
            calories: '~420 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Moída Gratinada',
                totalWeight: '250g de carne moída',
                ingredients: [
                    '250g de carne moída',
                    '200g de batata',
                    '100g de queijo mussarela',
                    '1 cebola',
                    '2 tomates',
                    '3 dentes de alho',
                    '2 colheres de sopa de óleo',
                    '200ml de molho de tomate',
                    'Sal, pimenta e orégano'
                ],
                instructions: [
                    'Refogue cebola e alho no óleo',
                    'Adicione a carne moída e doure',
                    'Acrescente tomates e molho de tomate',
                    'Tempere e cozinhe por 15 minutos',
                    'Cozinhe as batatas em fatias',
                    'Monte camadas: carne, batata, queijo',
                    'Asse a 180°C por 25 minutos até dourar'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco Simples',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de óleo'
                ],
                instructions: [
                    'Refogue o arroz no óleo',
                    'Adicione água e sal',
                    'Cozinhe por 18 minutos',
                    'Deixe descansar por 5 minutos'
                ]
            },
            salad: {
                name: 'Salada Mista Colorida',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '150g de alface americana',
                    '100g de tomate',
                    '50g de pepino',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Corte todos os vegetais',
                    'Misture em uma saladeira',
                    'Tempere com azeite, vinagre e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '150g de carne moída gratinada',
                    carbohydrate: '150g de arroz',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '100g de carne moída gratinada',
                    carbohydrate: '100g de arroz',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Gratinado fica mais saboroso se deixar dourar bem por cima. Use queijo de boa qualidade.'
    },
    'tilapia-baked-1': {
        title: 'Tilápia Assada com Batatas',
        description: 'Dourada e aromática',
        husband: {
            portion: '200g tilápia + 150g batata + legumes + salada',
            calories: '~580 kcal'
        },
        wife: {
            portion: '150g tilápia + 100g batata + legumes + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Tilápia Assada com Batatas',
                totalWeight: '350g de tilápia + 400g batatas',
                ingredients: [
                    '350g de filé de tilápia',
                    '400g de batatas',
                    '2 limões',
                    '3 dentes de alho',
                    '3 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    'Salsinha e cebolinha'
                ],
                instructions: [
                    'Tempere a tilápia com sal, pimenta e alho',
                    'Regue com suco de limão e azeite',
                    'Corte as batatas em fatias',
                    'Tempere as batatas com sal e azeite',
                    'Asse as batatas por 20 minutos',
                    'Adicione o peixe e asse por mais 15 minutos',
                    'Finalize com ervas frescas'
                ]
            },
            carbohydrate: {
                name: 'Batatas Assadas',
                totalWeight: 'Incluído no preparo principal',
                ingredients: ['Incluído no preparo da tilápia'],
                instructions: ['Assadas junto com a tilápia']
            },
            salad: {
                name: 'Salada de Agrião e Tomate',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de agrião',
                    '100g de tomate',
                    '2 colheres de sopa de azeite extra virgem',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem o agrião',
                    'Corte os tomates em fatias',
                    'Misture em uma saladeira',
                    'Tempere com azeite, limão e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de tilápia assada',
                    carbohydrate: '150g de batatas',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '150g de tilápia assada',
                    carbohydrate: '100g de batatas',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Tilápia assa rapidamente, cuidado para não ressecar. Limão realça o sabor do peixe.'
    },
    // Mais receitas de carne bovina
    'beef-fried-5': {
        title: 'Bife na Chapa com Alho',
        description: 'Simples e delicioso',
        husband: {
            portion: '180g bife + 120g arroz + feijão + salada',
            calories: '~650 kcal'
        },
        wife: {
            portion: '120g bife + 80g arroz + feijão + salada abundante',
            calories: '~400 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Bife na Chapa com Alho',
                totalWeight: '300g de bife',
                ingredients: [
                    '300g de bife (alcatra ou patinho)',
                    '6 dentes de alho',
                    '3 colheres de sopa de óleo',
                    '1 colher de chá de sal grosso',
                    '1/2 colher de chá de pimenta do reino',
                    'Salsinha picada'
                ],
                instructions: [
                    'Amasse o alho com sal grosso',
                    'Tempere os bifes com a pasta de alho',
                    'Deixe marinar por 30 minutos',
                    'Aqueça bem a chapa ou frigideira',
                    'Grelhe os bifes por 3-4 minutos cada lado',
                    'Finalize com salsinha picada'
                ]
            },
            carbohydrate: {
                name: 'Arroz e Feijão Tradicional',
                totalWeight: '130g arroz + 100g feijão',
                ingredients: [
                    '130g de arroz branco',
                    '100g de feijão carioca',
                    '1 cebola',
                    '3 dentes de alho',
                    '2 colheres de sopa de óleo',
                    'Sal a gosto'
                ],
                instructions: [
                    'Cozinhe o feijão na pressão por 20 minutos',
                    'Refogue cebola e alho',
                    'Cozinhe o arroz com parte do refogado',
                    'Tempere o feijão com o restante'
                ]
            },
            salad: {
                name: 'Salada Simples',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de alface',
                    '100g de tomate',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de vinagre',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave e corte a alface',
                    'Corte o tomate em fatias',
                    'Tempere com azeite, vinagre e sal'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de bife na chapa',
                    carbohydrate: '120g arroz + 80g feijão',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '120g de bife na chapa',
                    carbohydrate: '80g arroz + 60g feijão',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Chapa bem quente sela a carne rapidamente. Alho amassado com sal grosso dá mais sabor.'
    },
    'chicken-fried-3': {
        title: 'Frango Salteado com Legumes',
        description: 'Colorido e nutritivo',
        husband: {
            portion: '180g frango + legumes + 120g arroz + salada',
            calories: '~600 kcal'
        },
        wife: {
            portion: '120g frango + legumes + 80g arroz + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Frango Salteado com Legumes',
                totalWeight: '300g frango + 300g legumes',
                ingredients: [
                    '300g de peito de frango em cubos',
                    '1 abobrinha média',
                    '1 cenoura',
                    '1 pimentão vermelho',
                    '100g de vagem',
                    '3 dentes de alho',
                    '3 colheres de sopa de azeite',
                    'Sal, pimenta e orégano'
                ],
                instructions: [
                    'Corte o frango em cubos',
                    'Corte todos os legumes em cubos',
                    'Refogue o alho no azeite',
                    'Doure o frango por 5 minutos',
                    'Adicione os legumes mais duros primeiro',
                    'Tempere e salteie por 8-10 minutos',
                    'Finalize com orégano'
                ]
            },
            carbohydrate: {
                name: 'Arroz Branco Soltinho',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de óleo'
                ],
                instructions: [
                    'Refogue o arroz no óleo',
                    'Adicione água e sal',
                    'Cozinhe por 18 minutos',
                    'Deixe descansar'
                ]
            },
            salad: {
                name: 'Salada Verde',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '200g de alface crespa',
                    '100g de rúcula',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal a gosto'
                ],
                instructions: [
                    'Lave bem as folhas',
                    'Misture em uma saladeira',
                    'Tempere na hora de servir'
                ]
            },
            portions: {
                husband: {
                    protein: '180g de frango com legumes',
                    carbohydrate: '150g de arroz',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '120g de frango com legumes',
                    carbohydrate: '100g de arroz',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Salteado mantém os legumes crocantes e nutritivos. Corte tudo no mesmo tamanho para cozimento uniforme.'
    },
    'ground-beef-fried-3': {
        title: 'Carne Moída com Berinjela',
        description: 'Mediterrânea',
        husband: {
            portion: '150g carne com berinjela + 120g arroz + salada',
            calories: '~580 kcal'
        },
        wife: {
            portion: '100g carne com berinjela + 80g arroz + salada abundante',
            calories: '~380 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Carne Moída com Berinjela',
                totalWeight: '250g carne + 300g berinjela',
                ingredients: [
                    '250g de carne moída',
                    '300g de berinjela',
                    '1 cebola média',
                    '2 tomates',
                    '3 dentes de alho',
                    '3 colheres de sopa de azeite',
                    '1 colher de chá de sal',
                    'Manjericão fresco'
                ],
                instructions: [
                    'Corte a berinjela em cubos e deixe no sal por 30 min',
                    'Escorra e seque a berinjela',
                    'Refogue cebola e alho no azeite',
                    'Adicione a carne moída e doure',
                    'Acrescente berinjela e tomates',
                    'Cozinhe por 20 minutos',
                    'Finalize with manjericão'
                ]
            },
            carbohydrate: {
                name: 'Arroz Integral',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz integral',
                    '260ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de azeite'
                ],
                instructions: [
                    'Lave o arroz',
                    'Refogue com azeite',
                    'Adicione água e sal',
                    'Cozinhe por 40 minutos'
                ]
            },
            salad: {
                name: 'Salada Mediterrânea',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '150g de alface',
                    '100g de tomate cereja',
                    '50g de azeitona preta',
                    '2 colheres de sopa de azeite extra virgem',
                    '1 colher de sopa de vinagre balsâmico',
                    'Orégano'
                ],
                instructions: [
                    'Corte todos os ingredientes',
                    'Misture em uma saladeira',
                    'Tempere com azeite, vinagre e orégano'
                ]
            },
            portions: {
                husband: {
                    protein: '150g de carne moída com berinjela',
                    carbohydrate: '150g de arroz integral',
                    salad: '100g de salada'
                },
                wife: {
                    protein: '100g de carne moída com berinjela',
                    carbohydrate: '100g de arroz integral',
                    salad: '200g de salada'
                }
            }
        },
        tips: 'Berinjela absorve bem os sabores. Deixar no sal remove o amargor e melhora a textura.'
    },
    'tilapia-fried-2': {
        title: 'Tilápia na Frigideira com Alho',
        description: 'Aromática e dourada',
        husband: {
            portion: '200g tilápia + 120g arroz + legumes + salada',
            calories: '~550 kcal'
        },
        wife: {
            portion: '150g tilápia + 80g arroz + legumes + salada abundante',
            calories: '~360 kcal'
        },
        completeMenu: {
            protein: {
                name: 'Tilápia na Frigideira com Alho',
                totalWeight: '350g de filé de tilápia',
                ingredients: [
                    '350g de filé de tilápia',
                    '6 dentes de alho',
                    '3 colheres de sopa de azeite',
                    '1 limão (suco)',
                    '1 colher de chá de sal',
                    '1/2 colher de chá de pimenta do reino',
                    'Salsinha picada'
                ],
                instructions: [
                    'Tempere os filés com sal e pimenta',
                    'Lamine o alho finamente',
                    'Aqueça o azeite na frigideira',
                    'Doure o alho até ficar dourado',
                    'Frite a tilápia por 4 minutos cada lado',
                    'Regue com limão e salsinha'
                ]
            },
            carbohydrate: {
                name: 'Arroz de Coco',
                totalWeight: '130g de arroz cru',
                ingredients: [
                    '130g de arroz branco',
                    '200ml de leite de coco',
                    '60ml de água',
                    '1 colher de chá de sal',
                    '1 colher de sopa de azeite'
                ],
                instructions: [
                    'Refogue o arroz no azeite',
                    'Adicione leite de coco, água e sal',
                    'Cozinhe por 18 minutos',
                    'Deixe descansar por 5 minutos'
                ]
            },
            salad: {
                name: 'Salada Tropical',
                totalWeight: '300g de vegetais',
                ingredients: [
                    '150g de alface americana',
                    '100g de manga',
                    '50g de cebola roxa',
                    '2 colheres de sopa de azeite',
                    '1 colher de sopa de limão',
                    'Sal e pimenta'
                ],
                instructions: [
                    'Corte a alface em tiras',
                    'Corte a manga em cubos',
                    'Corte a cebola em fatias finas',
                    'Misture e tempere com azeite e limão'
                ]
            },
            portions: {
                husband: {
                    protein: '200g de tilápia com alho',
                    carbohydrate: '150g de arroz de coco',
                    salad: '100g de salada tropical'
                },
                wife: {
                    protein: '150g de tilápia com alho',
                    carbohydrate: '100g de arroz de coco',
                    salad: '200g de salada tropical'
                }
            }
        },
        tips: 'Alho dourado dá sabor especial ao peixe. Arroz de coco combina perfeitamente com tilápia.'
    }
};

// Variáveis globais
let currentMeal = 'breakfast';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

function initializeEventListeners() {
    // Seleção de refeições
    document.querySelectorAll('.meal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.meal-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Esconder todas as seções de receitas
            document.querySelectorAll('.meal-recipes').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar a seção selecionada
            const mealType = this.dataset.meal;
            document.getElementById(`${mealType}-recipes`).classList.add('active');
            currentMeal = mealType;
        });
    });
    
    // Clique nos cards de receitas (para café da manhã e lanches)
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', function() {
            const recipeId = this.dataset.recipe;
            showRecipeModal(recipeId);
        });
    });
    
    // Seleção de proteína para almoço (ícones)
    document.querySelectorAll('#lunch-protein-icons .protein-icon-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remover seleção anterior
            document.querySelectorAll('#lunch-protein-icons .protein-icon-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Adicionar seleção atual
            this.classList.add('selected');
            // Chamar função de seleção
            handleProteinSelection('lunch', this.dataset.protein);
        });
    });
    
    // Seleção de proteína para jantar (ícones)
    document.querySelectorAll('#dinner-protein-icons .protein-icon-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remover seleção anterior
            document.querySelectorAll('#dinner-protein-icons .protein-icon-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Adicionar seleção atual
            this.classList.add('selected');
            // Chamar função de seleção
            handleProteinSelection('dinner', this.dataset.protein);
        });
    });
    
    // Método de preparo para almoço
    document.querySelectorAll('input[name="lunch-cooking"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const selectedProtein = document.querySelector('#lunch-protein-icons .protein-icon-option.selected');
                const protein = selectedProtein ? selectedProtein.dataset.protein : '';
                showRecipeSuggestions('lunch', protein, this.value);
            }
        });
    });
    
    // Método de preparo para jantar
    document.querySelectorAll('input[name="dinner-cooking"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const selectedProtein = document.querySelector('#dinner-protein-icons .protein-icon-option.selected');
                const protein = selectedProtein ? selectedProtein.dataset.protein : '';
                showRecipeSuggestions('dinner', protein, this.value);
            }
        });
    });
    
    // Fechar modal
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function handleProteinSelection(meal, protein) {
    const cookingMethod = document.getElementById(`cooking-method-${meal}`);
    const suggestions = document.getElementById(`${meal}-suggestions`);
    
    // Reset
    cookingMethod?.classList.add('hidden');
    suggestions?.classList.add('hidden');
    
    // Limpar seleções anteriores
    document.querySelectorAll(`input[name="${meal}-cooking"]`).forEach(radio => {
        radio.checked = false;
    });
    
    if (protein) {
        if (protein === 'carne-moida') {
            // Para carne moída, mostrar sugestões imediatamente
            showAllGroundBeefRecipes(meal);
        } else {
            cookingMethod?.classList.remove('hidden');
        }
    }
}

function showRecipeSuggestions(meal, protein, cookingMethod) {
    const suggestionsDiv = document.getElementById(`${meal}-suggestions`);
    const recipeGrid = document.getElementById(`${meal}-recipe-grid`);
    
    if (!suggestionsDiv || !recipeGrid) return;
    
    let recipes = proteinRecipes[protein]?.[cookingMethod] || [];
    
    // Limpar grid anterior
    recipeGrid.innerHTML = '';
    
    // Adicionar receitas
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.dataset.recipe = recipe.id;
        recipeCard.innerHTML = `
            <h4>${recipe.title}</h4>
            <p class="recipe-preview">${recipe.preview}</p>
        `;
        
        recipeCard.addEventListener('click', function() {
            showRecipeModal(recipe.id);
        });
        
        recipeGrid.appendChild(recipeCard);
    });
    
    suggestionsDiv.classList.remove('hidden');
}

function showAllGroundBeefRecipes(meal) {
    const suggestionsDiv = document.getElementById(`${meal}-suggestions`);
    const recipeGrid = document.getElementById(`${meal}-recipe-grid`);
    
    if (!suggestionsDiv || !recipeGrid) return;
    
    // Combinar todas as receitas de carne moída (frito + assado)
    const friedRecipes = proteinRecipes['carne-moida']?.frito || [];
    const bakedRecipes = proteinRecipes['carne-moida']?.assado || [];
    const allRecipes = [...friedRecipes, ...bakedRecipes];
    
    // Limpar grid anterior
    recipeGrid.innerHTML = '';
    
    // Adicionar todas as receitas
    allRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.dataset.recipe = recipe.id;
        recipeCard.innerHTML = `
            <h4>${recipe.title}</h4>
            <p class="recipe-preview">${recipe.preview}</p>
        `;
        
        recipeCard.addEventListener('click', function() {
            showRecipeModal(recipe.id);
        });
        
        recipeGrid.appendChild(recipeCard);
    });
    
    suggestionsDiv.classList.remove('hidden');
}

function showRecipeModal(recipeId) {
    let recipe = recipesDatabase[recipeId] || detailedProteinRecipes[recipeId];
    
    if (!recipe) {
        // Receita genérica para IDs não encontrados
        recipe = {
            title: 'Receita em Desenvolvimento',
            description: 'Esta receita está sendo preparada com carinho',
            husband: {
                portion: 'Porção adequada para ganho de peso',
                calories: '~500-700 kcal'
            },
            wife: {
                portion: 'Porção adequada para perda de peso',
                calories: '~300-400 kcal'
            },
            ingredients: [
                'Ingredientes frescos e nutritivos',
                'Temperos naturais',
                'Azeite extra virgem',
                'Sal e pimenta a gosto'
            ],
            instructions: [
                'Prepare os ingredientes',
                'Tempere adequadamente',
                'Cozinhe com carinho',
                'Sirva com amor'
            ],
            tips: 'Esta receita será detalhada em breve. Use ingredientes frescos e de qualidade.'
        };
    }
    
    const modalContent = document.getElementById('recipe-details');
    
    // Verificar se a receita tem cardápio completo
    if (recipe.completeMenu) {
        modalContent.innerHTML = `
            <h3>🍽️ ${recipe.title} - Cardápio Completo</h3>
            <p style="color: #718096; font-size: 1.1em; margin-bottom: 20px;">${recipe.description}</p>
            
            <div class="portions-section">
                <div class="portion-card">
                    <h4>👨 Ele (Ganho de Peso)</h4>
                    <p><strong>Proteína:</strong> ${recipe.completeMenu.portions.husband.protein}</p>
                    <p><strong>Carboidrato:</strong> ${recipe.completeMenu.portions.husband.carbohydrate}</p>
                    <p><strong>Salada:</strong> ${recipe.completeMenu.portions.husband.salad}</p>
                    <p><strong>Calorias:</strong> ${recipe.husband.calories}</p>
                </div>
                <div class="portion-card">
                    <h4>👩 Ela (Perda de Peso)</h4>
                    <p><strong>Proteína:</strong> ${recipe.completeMenu.portions.wife.protein}</p>
                    <p><strong>Carboidrato:</strong> ${recipe.completeMenu.portions.wife.carbohydrate}</p>
                    <p><strong>Salada:</strong> ${recipe.completeMenu.portions.wife.salad}</p>
                    <p><strong>Calorias:</strong> ${recipe.wife.calories}</p>
                </div>
            </div>
            
            <div class="complete-menu">
                <div class="menu-component">
                    <h4>🥩 ${recipe.completeMenu.protein.name}</h4>
                    <p><strong>Quantidade Total:</strong> ${recipe.completeMenu.protein.totalWeight}</p>
                    <div class="ingredients">
                        <h5>Ingredientes:</h5>
                        <ul>
                            ${recipe.completeMenu.protein.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h5>Preparo:</h5>
                        <ol>
                            ${recipe.completeMenu.protein.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                
                <div class="menu-component">
                    <h4>🍚 ${recipe.completeMenu.carbohydrate.name}</h4>
                    <p><strong>Quantidade Total:</strong> ${recipe.completeMenu.carbohydrate.totalWeight}</p>
                    <div class="ingredients">
                        <h5>Ingredientes:</h5>
                        <ul>
                            ${recipe.completeMenu.carbohydrate.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h5>Preparo:</h5>
                        <ol>
                            ${recipe.completeMenu.carbohydrate.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                
                <div class="menu-component">
                    <h4>🥗 ${recipe.completeMenu.salad.name}</h4>
                    <p><strong>Quantidade Total:</strong> ${recipe.completeMenu.salad.totalWeight}</p>
                    <div class="ingredients">
                        <h5>Ingredientes:</h5>
                        <ul>
                            ${recipe.completeMenu.salad.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h5>Preparo:</h5>
                        <ol>
                            ${recipe.completeMenu.salad.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
            
            <div class="tips">
                <p><strong>💡 Dica Nutricional:</strong> ${recipe.tips}</p>
                <p><strong>👥 Otimização:</strong> Prepare tudo junto e divida as porções conforme indicado para cada pessoa.</p>
            </div>
        `;
    } else {
        // Formato antigo para receitas sem cardápio completo
        modalContent.innerHTML = `
            <h3>${recipe.title}</h3>
            <p style="color: #718096; font-size: 1.1em; margin-bottom: 20px;">${recipe.description}</p>
            
            <div class="portions-section">
                <div class="portion-card">
                    <h4>👨 Ele (Ganho de Peso)</h4>
                    <p><strong>Porção:</strong> ${recipe.husband.portion}</p>
                    <p><strong>Calorias:</strong> ${recipe.husband.calories}</p>
                </div>
                <div class="portion-card">
                    <h4>👩 Ela (Perda de Peso)</h4>
                    <p><strong>Porção:</strong> ${recipe.wife.portion}</p>
                    <p><strong>Calorias:</strong> ${recipe.wife.calories}</p>
                </div>
            </div>
            
            <div class="ingredients">
                <h5>🛒 Ingredientes</h5>
                <ul>
                    ${(recipe.ingredients || []).map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="instructions">
                <h5>👨‍🍳 Modo de Preparo</h5>
                <ol>
                    ${(recipe.instructions || []).map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            <div class="tips">
                <p><strong>💡 Dica Nutricional:</strong> ${recipe.tips}</p>
            </div>
        `;
    }
    
    const modal = document.getElementById('recipe-modal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}