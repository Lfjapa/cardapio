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
    }
    // Adicione mais receitas conforme necessário
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
                    <h4>👨 Luiz Felipe (Ganho de Peso)</h4>
                    <p><strong>Proteína:</strong> ${recipe.completeMenu.portions.husband.protein}</p>
                    <p><strong>Carboidrato:</strong> ${recipe.completeMenu.portions.husband.carbohydrate}</p>
                    <p><strong>Salada:</strong> ${recipe.completeMenu.portions.husband.salad}</p>
                    <p><strong>Calorias:</strong> ${recipe.husband.calories}</p>
                </div>
                <div class="portion-card">
                    <h4>👩 Suellen (Perda de Peso)</h4>
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
                    <h4>👨 Luiz Felipe (Ganho de Peso)</h4>
                    <p><strong>Porção:</strong> ${recipe.husband.portion}</p>
                    <p><strong>Calorias:</strong> ${recipe.husband.calories}</p>
                </div>
                <div class="portion-card">
                    <h4>👩 Suellen (Perda de Peso)</h4>
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