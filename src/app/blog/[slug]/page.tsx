import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { Prose } from "@/components/blog/Prose";
import { posts } from "@/data/posts";

const fleetArticle = (
  <>
      <h2>Quem não planta gestão colhe prejuízo</h2>
      <p>
        Atingir margens confortáveis no agronegócio exige mais do que produtividade. A disputa por mercado agora é global,
        impulsionada por tecnologia e por fazendas que operam como verdadeiras indústrias a céu aberto. Nesse cenário, falta
        tempo justamente para quem precisa tomar decisões estratégicas sobre capital, pessoas e logística.
      </p>
      <p>
        Quanto mais complexo o ambiente, mais urgente é estruturar processos. Sem gestão, toda a sofisticação técnica perde
        efeito e se transforma em custo. Por isso, a Brever defende um mantra simples: plantar gestão para colher lucro.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/gestao-frotas-img1.jpg"
          alt="Gestor do agronegócio monitora indicadores de frota em dashboard de operações"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 1. A pressão por eficiência exige visibilidade total dos ativos de campo. Fonte: Freepik.
      </blockquote>
      <p>
        Gestão, em essência, é alinhar objetivos, recursos e métricas para chegar ao destino com o menor atrito possível. No
        campo, isso significa dominar o fluxo de dados que nasce em cada talhão, posto de abastecimento e oficina. Não à toa,
        autores como Ronald D. Kay definem quatro fases indispensáveis para qualquer propriedade rural.
      </p>
      <h3>Os 4 pilares de Kay para propriedades rurais</h3>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Planejamento:</strong> escolher a linha de ação, definir metas e mapear recursos como terra, insumos, frota e
          equipe. Também é o momento de desenhar cenários e alternativas.
        </li>
        <li>
          <strong>Implementação:</strong> acompanhar a execução do plano no dia a dia, garantindo alinhamento entre o que foi
          decidido e o que acontece no campo.
        </li>
        <li>
          <strong>Controle:</strong> registrar resultados, consolidar indicadores e compará-los com o esperado. Aqui nascem os
          alertas precoces sobre desvios de produtividade ou custo.
        </li>
        <li>
          <strong>Ajuste:</strong> atualizar estratégias sempre que o contexto ou os resultados mudarem. Uma safra diferente, um
          novo fornecedor ou um pico de demanda pedem respostas rápidas.
        </li>
      </ol>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/gestao-frotas-img2.jpg"
          alt="Equipe sincroniza dados de planejamento, controle e ajuste em operações agrícolas"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 2. Planejamento, implementação, controle e ajuste precisam se retroalimentar.
      </blockquote>
      <p>
        Além dos processos, um ponto crítico é dominar os bens de capital: tratores, colheitadeiras, pulverizadores e toda a
        cadeia de implementos que realmente transforma diesel em produtividade. Eles são caros, exigem financiamento e impactam
        diretamente o retorno de cada talhão.
      </p>
      <p>
        Nem todo meio de produção é um bem de capital, mas todo bem de capital precisa ser tratado como investimento estratégico.
        Ter clareza sobre vida útil, manutenção e disponibilidade evita que uma safra pare dois dias antes da colheita – justamente
        quando o relógio joga contra.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/gestao-frotas-img3.jpg"
          alt="Mecânico realiza manutenção preventiva em trator com controle digital de peças"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 3. Manter o ciclo de vida das máquinas sob controle evita paralisações de safra. Fonte: Wikimedia Commons.
      </blockquote>
      <p>
        Na prática, controlar garantias, horas trabalhadas e histórico de peças para dezenas de equipamentos consome tempo que o
        gestor não tem. Quando uma máquina para inesperadamente, a planilha já ficou desatualizada e a reposição custa mais caro.
      </p>
      <h3>Como a Brever organiza sua frota</h3>
      <p>
        Para eliminar esse gargalo, a Brever desenvolveu um módulo completo de gestão de frotas. Ele concentra abastecimento,
        manutenções, notas fiscais e telemetria em um único aplicativo, com acesso offline para o operador que está no campo.
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Agenda automática de revisões e troca de peças conforme horas de uso.</li>
        <li>Alertas de abastecimento e consumo para cada veículo, evitando desvios e desperdícios.</li>
        <li>Centralização de documentos críticos, como garantias e notas de serviço.</li>
        <li>Visão completa “do plantio à entrega”, conectando frota agrícola e logística de transporte.</li>
      </ul>
      <p>
        Com dados confiáveis na palma da mão, o produtor volta a ter foco no que importa: plantar, colher e vender com previsibilidade.
        Gestão passa a ser vantagem competitiva – e não mais um peso na rotina.
      </p>
  </>
);

const soyArticle = (
  <>
      <h1>Vai plantar soja? Saiba quais são os 5 países que mais compram</h1>
      <p>
        A soja é uma das mais importantes commodities do país e a principal representante do agronegócio
        brasileiro. Uma cultura comercial que começou timidamente no Rio Grande do sul, ainda em 1924,
        se expandiu até atingir a marca de 47,61 milhões de hectares plantados em 2025, de acordo com um
        levantamento feito pela Companhia Nacional de Abastecimento (CONAB).
      </p>
      <p>
        Segundo dados do COMEX STAT, sistema oficial de dados do comércio exterior brasileiro, a soja foi o
        segundo produto mais exportado em 2024, representando 12,7% do total de exportações brasileiras,
        ficando atrás apenas do petróleo em seu estado bruto, que marcou a faixa de 13,3% das exportações.
      </p>
      <p>
        Traduzindo esses números para quantidades mais palpáveis, foram 98,8 milhões de toneladas de soja
        que resultaram no ingresso de 42,9 bilhões de dólares no país, enquanto o petróleo marcou a faixa de
        45 bilhões de dólares no mesmo período.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/vai_plantar_soja-img1.jpg"
          alt="Produtor analisa vagens de soja maduras antes da colheita"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 1. Monitoramento da maturação dos grãos de soja antes da colheita.
      </blockquote>
      <p>
        O tamanho dessa cifra reforça a imponência do Agronegócio brasileiro, demonstrando sua real
        importância para a economia. Assim, os valores apresentados mostram que frases como “O Agro é o
        motor do Brasil” ou “é o Agro quem sustenta o país” são sempre bem fundadas na realidade dos fatos.
      </p>
      <p>
        Mas de onde vem todo esse dinheiro? Para quem vendemos essa quantidade impressionante de soja?
        Quais são os principais parceiros do Brasil nesse importante nicho do Agronegócio?
      </p>
      <h2>Os principais compradores da soja brasileira</h2>
      <h3>1. China</h3>
      <p>
        De acordo com o COMEX STAT, o principal comprador da soja brasileira foi a China, sendo responsável
        por impressionantes 73,3% do volume total das exportações. Traduzindo essa porcentagem para dólares
        americanos, o gigante asiático desembolsou a soma de 31,5 bilhões ao longo do ano de 2024, sendo, de
        longe, o parceiro comercial mais importante do setor.
      </p>
      <p>
        A destinação da soja brasileira, via de regra, encontra seu fim na alimentação dos rebanhos chineses,
        principalmente de suínos. A carne encontra uma demanda interna fortíssima, uma vez que o país contém a
        segunda maior população do mundo.
      </p>
      <p>
        Além de possuir a segunda maior população do mundo (sendo a Índia o primeiro colocado), a China também
        garante o segundo lugar no ranking de maiores economias do planeta, com um PIB de 18,74 trilhões de
        dólares. O primeiro lugar segue sendo dos Estados Unidos, com um PIB de 29,18 trilhões de dólares no ano
        de 2024.
      </p>
      <h3>2. Espanha</h3>
      <p>
        Em segundo lugar no ranking de exportação de soja temos a Espanha, representando apenas 4,2% do total de
        exportações. A cifra, modesta quando comparada à chinesa, se traduz em 1,8 bilhões de dólares, 29, 7 bilhões
        a menos que o primeiro colocado.
      </p>
      <p>
        Vale lembrar que a Espanha integra a União Europeia, sendo a quarta maior economia do bloco, ostentando um
        PIB de 1,7 trilhão de dólares no ano de 2024, de acordo com dados do Banco Mundial.
      </p>
      <p>
        É importante destacar que as relações comerciais entre Brasil e Espanha possuem uma base extremamente sólida.
        De acordo com o Ministério das Relações Exteriores, a Espanha é o segundo principal investidor direto estrangeiro
        no Brasil há mais de duas décadas, com uma média de 3,3 bilhões de dólares anuais que são aplicados no nosso país.
      </p>
      <h3>3. Tailândia</h3>
      <p>
        O terceiro país da lista é a Tailândia, com uma participação de 3,6% do total das exportações de soja. Isso equivale
        à soma de 1,5 bilhão de dólares advindos do país do sudeste asiático.
      </p>
      <p>
        Apesar de possuir um território relativamente pequeno, com 513.120 Km², a Tailândia possui a vigésima maior
        população do mundo, com 71,67 milhões de pessoas, o que ajuda a entender a importação de grandes quantidades de
        alimentos.
      </p>
      <h3>4. Turquia</h3>
      <p>
        Em quarto lugar temos a Turquia, com 2,3% do total das exportações. Isso representa a soma de 1 bilhão de dólares
        americanos advindos desse país.
      </p>
      <p>
        As relações comerciais entre Brasil e Turquia são mais antigas do que geralmente esperamos. De acordo com o
        Ministério das Relações Exteriores, o início das negociações entre os dois países remonta ao distante ano de 1858,
        quando os dois Estados ainda eram Impérios.
      </p>
      <p>
        No ano de 2024, a soja representou 26% das exportações brasileiras para a Turquia, seguida do algodão (12%), do
        minério de ferro (9.6%) e do café (8%). Já na via das importações, temos um destaque para produtos manufaturados,
        como motores e maquinário não elétrico (14,7%), e partes e acessórios de veículos automotores (12,2%).
      </p>
      <h3>5. Irã</h3>
      <p>
        Por fim, o último país do nosso ranking de exportação de soja é o Irã, com 1,9% do total exportado. Isso representa
        826,5 milhões de dólares que ingressaram no Brasil em 2024.
      </p>
      <p>
        O irã é um importante parceiro comercial para o agronegócio brasileiro. Além da soja, que representa 27,5% das
        exportações totais para o país, o Irã também compra muito milho (30,7% do total), e também farelos de soja e outros
        alimentos para animais (27,6%). De acordo com o Ministério das Relações Exteriores, o Brasil foi superavitário em 2,94
        bilhões de dólares quando negociando com o Irã em 2024.
      </p>
      <p>
        Aqui cabe destacar que a soja e o farelo de soja são vendidos no mercado internacional como produtos diferentes,
        mesmo que tenham a mesma origem. A razão dessa diferenciação está na adoção do Sistema Harmonizado (SH),
        elaborado pela Organização Mundial das Alfândegas (OMA).
      </p>
      <p>
        O sistema compreende cerca de 5 mil mercadorias catalogadas por códigos numéricos, visando ordenar as compras e
        vendas dos mais variados produtos, oriundos dos mais variados países.
      </p>
      <div className="overflow-hidden rounded-2xl border border-border bg-card p-4">
        <Image
          src="/assets/vai_plantar_soja-img3.jpg"
          alt="Tabela destacando os cinco principais compradores da soja brasileira com colunas Posição, País, Participação e Valor exportado em bilhões de dólares"
          width={1280}
          height={720}
          className="h-auto w-full rounded-xl object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 3. Ranking dos principais importadores de soja com Posição, País, Participação e Valor exportado (US$ bilhões). Fonte: COMEX STAT.
      </blockquote>
      <h4>1. China</h4>
      <p>Principal destino da soja brasileira (73,3%). A maior parte é usada na alimentação de suínos, devido à enorme demanda interna por carne suína.</p>
      <h4>2. Espanha</h4>
      <p>Quarta maior economia da União Europeia e segundo maior investidor estrangeiro no Brasil há mais de 20 anos.</p>
      <h4>3. Tailândia</h4>
      <p>País do sudeste asiático com 71,67 milhões de habitantes e grande demanda por alimentos.</p>
      <h4>4. Turquia</h4>
      <p>Relações comerciais com o Brasil desde 1858. Soja representou 26% das exportações brasileiras para o país em 2024.</p>
      <h4>5. Irã</h4>
      <p>Além da soja (27,5%), importa grandes quantidades de milho (30,7%) e farelo de soja.</p>
      <h2>O Brasil como celeiro do mundo</h2>
      <p>
        Essa quantidade impressionante de soja exportada reforça a posição do Brasil como Celeiro do Mundo. A expressão é
        usada para descrever países ou regiões que são referência na produção de alimentos, sendo verdadeiros alicerces da
        economia global.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/vai_plantar_soja-img2.jpg"
          alt="Operação de carregamento de grãos de soja em terminal logístico"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 2. Logística da soja brasileira pronta para exportação.
      </blockquote>
      <p>
        Nesse sentido, o Brasil contribui não apenas com a soja, mas também com quantidades expressivas de milho (39,8
        milhões de toneladas exportadas); café (2,8 milhões de toneladas) e carne bovina fresca (2,5 milhões de toneladas).
        Esses dados também são do ano de 2024, retirados da COMEX STAT.
      </p>
      <p>
        Assim, o Agronegócio brasileiro, motor do país e mantenedor do celeiro do mundo, tem seu papel devidamente destacado.
        Não só a soja, mas também os outros alimentos que aqui são produzidos movimentam uma economia bilionária que está cada
        dia mais inovadora.
      </p>
      <p>
        A tecnologia tem sido uma importante aliada do produtor rural, permitindo que seu trabalho frutifique exponencialmente
        graças a eficiência das técnicas e dos instrumentos que hoje estão disponíveis.
      </p>
      <p>
        Pensando nas necessidades dos pequenos e médios produtores rurais, a Brever apresenta seu aplicativo de gestão,
        oferecendo soluções inteligentes para um mundo que está cada dia mais acelerado e competitivo.
      </p>
      <p>
        Ferramentas como controle de estoque, monitoramento de frotas e sistemas de alarmes prometem entregar a eficiência e a
        simplicidade que sua propriedade necessita para alcançar novos níveis de competitividade, tanto em nível nacional quanto
        em nível internacional.
      </p>
    </>
);

const moscaArticle = (
  <>
      <h2>Entenda por que a mosca branca pode acabar com a cultura do feijão</h2>
      <p>
        O feijão é uma cultura fundamental para o abastecimento alimentar do Brasil, destacando-se como uma excelente
        fonte de proteínas cujo consumo diário é uma tradição no país. Segundo os dados mais recentes da EMBRAPA (Empresa
        Brasileira de Pesquisa Agropecuária), em 2023 o consumo médio de feijão-comum foi de 12,8 quilos anuais por
        habitante, ou seja, pouco mais de um quilo por mês para cada brasileiro.
      </p>
      <p>
        Com uma considerável adaptabilidade ao solo e às condições climáticas, o feijoeiro integra a maioria dos sistemas
        produtivos de sequeiro, principalmente de pequenos e médios produtores rurais. Nesse sentido, inclusive, estatísticas
        apontam que 70% da produção da leguminosa advém da agricultura familiar.
      </p>
      <p>
        Entretanto, a produção de feijão encontra na mosca-branca (Bemisia tabaci) um inimigo mortal. A praga pode devastar
        plantações inteiras e destruir os lucros do agricultor caso medidas de prevenção e combate não sejam adotadas. Saiba
        quais são essas medidas e como o seu funcionamento pode salvar a sua lavoura.
      </p>
      <h3>Bemisia tabaci – A mosca-branca</h3>
      <p>
        Ao contrário do que muitos imaginam, a Bemisia tabaci, ou mosca-branca, não é uma mosca, mas um inseto da ordem
        Hemiptera que se alimenta de seiva. Ela apresenta uma coloração amarelo-pálida e possui cerca de 1 a 2 milímetros de
        comprimento. A praga tem uma dieta muito variada, afetando lavouras de feijão, de soja, de tomate, de batata-doce, e
        mais uma série de outras cultivares, chegando a se alimentar de cerca de 750 espécies diferentes.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/mosca-1.jpg"
          alt="Detalhe da mosca-branca adulto sobre folhas de feijoeiro"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 1. Mosca-branca.
      </blockquote>
      <p>
        Ademais, essa praga apresenta um altíssimo índice de proliferação: A fêmea pode colocar de 100 a 300 ovos na face
        inferior das folhas, que eclodem no período de 5 a 7 dias. A Bemisia tabaci leva cerca de 32 dias para atingir a fase
        adulta, podendo ter de 10 a 11 gerações por ano na cultura do feijoeiro. Entretanto, a velocidade da sua reprodução
        aumenta em climas quentes e secos, diminuindo a quantidade de dias necessários para a maturação.
      </p>
      <p>
        Seu ciclo de vida compreende é composto por quatro fases: a dos ovos, a das ninfas, a da pupa e a fase adulta. A
        imagem abaixo detalha esse ciclo com os períodos de cada um:
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/mosca-2.jpg"
          alt="Ciclo de vida completo da mosca-branca destacado sobre gráfico"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 2. Ciclo de vida da mosca-branca. Fonte: IRAC – BR (2025). Edição dos autores sobre a imagem.
      </blockquote>
      <p>
        Para o feijoeiro, o grande problema dessa praga é sua ação toxicogênica: O inseto (principalmente a fêmea) é o vetor
        de um vírus extremamente perigoso para a cultivar, o Vírus do Mosaico Dourado.
      </p>
      <p>
        A contaminação ocorre quando a mosca-branca suga a seiva da planta, infectando-a. Assim, o vírus pode ser transmitido
        antes mesmo da fase adulta do inseto, iniciando logo após a eclosão dos ovos, em aproximadamente uma semana após
        sua postura. A alimentação do inseto também produz outro problema para o agricultor: Ela libera uma solução
        açucarada, a honeydew, que é altamente favorável para o crescimento de fungos do gênero Capnodium sp.
      </p>
      <p>
        Além do feijoeiro, a infestação de fungos que se origina do honeydew também pode afetar a soja. A fumagina – camada
        escura de fungos que se assemelha com fuligem, geralmente depositada nas folhas – pode necrosar a haste da soja,
        principalmente nas variáveis de ciclo mais longo (como a neo 580 e a neo 581, por exemplo), que são muito mais
        suscetíveis à doença, havendo casos em que mais de 80% da plantação foi devastada.
      </p>
      <p>
        Essa enorme devastação causada na soja pode ser replicada no feijoeiro pela virose do Mosaico Dourado, também
        havendo casos em que as perdas excederam a casa dos 80% da lavoura. Para evitar esses desastres e controlar a
        mosca-branca, é fundamental conhecer o ciclo de vida do feijoeiro, de sorte a possibilitar o controle da Bemisia tabaci
        em cada uma de suas fases.
      </p>
      <p>Confira, abaixo, as etapas de desenvolvimento do feijoeiro.</p>
      <h3>Fenologia do feijoeiro: O Ciclo de vida da planta</h3>
      <p>
        O ciclo de cultura do feijão dura de 70 a 90 dias, dependendo da cultivar escolhida e das condições climáticas na
        lavoura. Esse ciclo pode ser fragmentado em 10 fases que vão da germinação até a maturação. Cada uma dessas fases
        é marcada por características específicas, demonstradas na imagem abaixo:
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image src="/assets/ciclo_feijao.jpg" alt="Fenologia do feijoeiro" width={1280} height={720} className="h-auto w-full object-cover" />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 3. Fenologia do feijoeiro.
      </blockquote>
      <p>Cada uma das fases é caracterizada por um evento, sendo identificadas da seguinte forma:</p>
      <p>V0 – Germinação: inicia-se assim que são fornecidas as condições ideais de umidade e temperatura do solo.</p>
      <p>V1 – Emergência: ocorre quando as plantas apresentam cotilédones acima da superfície.</p>
      <p>V2 – Folhas primárias: marcada pelo aparecimento de folhas unifolioladas opostas e totalmente expandidas.</p>
      <p>V3 – Primeira folha composta aberta: inicia-se com a presença da primeira folha trifoliolada aberta na planta.</p>
      <p>V4 – Terceira folha trifoliolada aberta: começa com o surgimento da terceira folha composta aberta.</p>
      <p>R5 – Pré-floração: ocorre com o surgimento dos primeiros botões florais, iniciando a fase reprodutiva.</p>
      <p>R6 – Floração: nesta fase é possível visualizar a primeira flor aberta, marcando o início do período reprodutivo.</p>
      <p>R7 – Formação das vagens: nesta fase inicia-se a formação dos frutos da planta, marcando também o início do enchimento dos grãos.</p>
      <p>R8 – Enchimento dos grãos: fase caracterizada pelo crescimento dos grãos e pela maturação fisiológica dos mesmos.</p>
      <p>R9 – Maturação fisiológica: é caracterizada pelo fim do enchimento dos grãos e pela perda das folhas.</p>
      <p>
        Caso a contaminação ocorra até o estágio V2, a planta pode sofrer uma grande redução no seu porte.
      </p>
      <div className="my-6 overflow-hidden rounded-3xl">
        <Image
          src="/assets/mosca-3.jpg"
          alt="Feijoeiro com sintomas de mosaico dourado ainda no estágio vegetativo"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <blockquote className="my-4 border-l-4 border-border/60 pl-4 italic text-text-muted">
        Figura 4. Feijoeiro sujeito ao Vírus do Mosaico Dourado. Fonte: Os autores.
      </blockquote>
      <h3>Monitoramento da mosca-branca na cultura do feijoeiro</h3>
      <p>
        O combate à Bemisia tabaci pode ser feito utilizando-se de várias técnicas: culturais, químicas, mecânicas e biológicas.
        Entretanto, antes da aplicação de todas essas técnicas é fundamental que o agricultor realize o monitoramento da praga,
        principalmente no início da lavoura. Para tanto, a inspeção da plantação e a colocação de armadilhas - com o objetivo de
        coletar amostras - são ferramentas fundamentais para seu posterior controle.
      </p>
      <p>A lista a seguir apresenta quais são as formas de realizar esse controle:</p>
      <p>1. Controle Cultural</p>
      <p>
        Essa forma de controle busca tornar o ambiente menos favorável à sobrevivência e proliferação da praga. Não se limita à
        apenas uma técnica, mas à todas aquelas que cumpram o objetivo presente em seu conceito. Algumas delas são:
      </p>
      <p>
        Eliminação de fontes alternativas do mosaico dourado
        O mosaico dourado pode ocorrer nas culturas de feijão e de soja. Com isso em mente, realizar a eliminação dos restos
        culturais de um plantio anterior que contenha alguma dessas plantas aumenta a prevenção ao contágio do vírus. A
        eliminação de ervas daninhas também é importante porque apesar de não abrigarem diretamente o vírus, podem ser
        reservatórios de Bemisia tabaci.
      </p>
      <p>
        Local do plantio
        Culturas hospedeiras da mosca-branca, como soja, tomate, algodão e fumo devem ser evitadas nas proximidades da
        lavoura de feijão. Isso ajuda a evitar a ocorrência da praga no feijoeiro.
      </p>
      <p>
        Barreiras vivas
        A utilização e barreiras vivas como o plantio de espécies de milho pode ajudar no controle da mosca-branca. A
        plantação-barreira atua como um muro contra insetos infectados que são carregados com o vento.
      </p>
      <p>2. Controle Biológico</p>
      <p>
        Algumas espécies de predadores podem ser grandes aliados do agricultor no combate à mosca-branca. Entre eles estão as
        espécies pertencentes às ordens Hemiptera (percevejos, cigarras), Neuroptera (como a formiga leão) e Coleoptera
        (besouros).
      </p>
      <p>
        Também existem organismos parasitas que ajudam no controle da mosca-branca, como os pertencentes ao gênero Encarsia,
        Eretmocerus e Amitus.
      </p>
      <p>3. Controle Mecânico</p>
      <p>
        O controle mecânico consiste essencialmente na utilização de armadilhas para a diminuição da população do inseto. Aqui
        também entram as barreiras físicas artificiais, sendo seu melhor exemplo as telas de proteção.
      </p>
      <p>4. Controle Químico</p>
      <p>
        O uso de produtos químicos também integra as possibilidades de controle da Bemisia tabaci. A tabela a seguir reúne uma
        série de inseticidas que podem ser utilizados no manejo da mosca-branca, catalogados conforme seu ingrediente ativo, seu
        grupo químico – ou sítio de ação primário – e conforme a fase do inseto em que devem ser aplicados.
      </p>
      <p><em>(imagem - colocar marcação de imagem)</em></p>
      <p>
        É justamente no controle químico que se revela a importância de conhecer cada uma das fases de vida da mosca-branca.
        Nesse mesmo sentido, a observação do estágio em que se encontra a praga é essencial para que a aplicação dos métodos de
        controle escolhidos não se transforme em prejuízo para o agricultor.
      </p>
      <h3>Manejo Integrado de Pragas</h3>
      <p>
        O manejo da Bemisia tabaci pode ser feito por meio das várias técnicas de controle apresentadas. Entretanto,
      </p>
      <p>
        O Manejo Integrado pode juntar técnicas culturais, biológicas, mecânicas e químicas, sempre pensadas conforme o
        custo/benefício das aplicações e conforme seus impactos no ambiente e na sociedade. Não se trata apenas da
        aglomeração de várias formas de controle, mas da sua distribuição eficiente.
      </p>
      <p>
        Essa eficiência no manejo fica mais requisitada a cada dia e muito disso se deve às novas variedades da mosca-branca
        que são resistentes à inseticidas. Além disso, estudos recentes demonstraram a expansão da área de infestação da
        Bemisia tabaci para regiões cada vez mais ao sul do país, como mostrará o mapa na seção seguinte:
      </p>
      <h3>A rota de expansão da mosca-branca</h3>
      <p>
        A Bemisia tabaci, na verdade, representa um complexo de espécies que são morfologicamente indistinguíveis entre si.
        Assim, “mosca-branca” não compreende apenas uma espécie, mas o termo representa uma variedade de biótipos – que são
        grupos de indivíduos que compartilham os mesmos genes.
      </p>
      <p>
        Dentre eles, destacam-se os biótipos B e Q, que são os mais preocupantes para o agricultor. O biótipo B, ou “Middle
        East Asia Minor” (MEAM1) é encontrado com mais frequência pelo Brasil, também sendo vetor do Vírus do Mosaico
        Dourado. A característica mais danosa dessa variedade de mosca-branca é sua resistência à inseticidas, como
        carbamatos, piretróides, organofosforados e neonicotinoides.
      </p>
      <p>
        Já o biótipo Q, ou “Mediterranean” (MED), é encontrado com maior frequência nas regiões sul do Brasil (apesar de ter
        sido identificado também no norte do estado do Mato Grosso). Sua principal característica é sua resistência à
        inseticidas juvenóides.
      </p>
      <p>
        O mapa abaixo, elaborado por pesquisadores da Universidade Estadual Paulista – UNESP, traz dados da distribuição dos
        biótipos B e Q pelo país. O biótipo B está representado em azul e o biótipo Q em vermelho.
      </p>
      <p><em>(imagem - colocar marcação de imagem)</em></p>
      <p>
        Como a mosca-branca é um inseto polífago – ou seja, alimenta-se de várias plantas - sua presença pode significar
        prejuízo para várias lavouras. A título de exemplo, o biótipo Q, encontrado no sul do Brasil, transmite o Tomato yellow
        leaf curl virus (TYLCV) e o Tomato torrado virus (ToTV).
      </p>
      <p>
        Além disso, o honeydew secretado durante a alimentação do inseto é um criadouro de fungos que podem afetar tanto a
        fotossíntese do feijão quanto a da soja, representantes importantíssimos do agro brasileiro.
      </p>
      <p>
        Com a descoberta de novos biótipos resistentes à tipos específicos de inseticidas, o conhecimento do princípio ativo que
        compõe o insumo é de fundamental importância para o agricultor, uma vez que a aplicação de um agente químico para o
        qual a praga desenvolveu resistência só pode se traduzir em prejuízo.
      </p>
      <p>
        Em razão dessa necessidade, o aplicativo de gestão de fazendas da Brever desenvolveu um bulário de agrotóxicos
        integrado, com acesso offline. Com ele você não depende de sinal para consultar o que precisa na hora da aplicação.
      </p>
      <p>
        Além disso, o aplicativo traz ferramentas que permitem o controle de estoque e de movimentação dos seus defensivos
        agrícolas, classificando-os conforme seu princípio ativo. Em tempos onde o controle de pragas requer o manejo integrado
        para tornar sua lavoura competitiva, a Brever traz mais do que facilidade para a gestão da sua fazenda: ela traz
        eficiência.
      </p>
    </>
);

const articleContent: Record<string, ReactNode> = {
  "gestao-frotas-controle": fleetArticle,
  "vai-plantar-soja": soyArticle,
  "5-paises-que-mais-compram-soja-brasileira": soyArticle,
  "mosca-branca-cultura-feijao": moscaArticle,
};

const defaultContent: ReactNode = (
  <>
    <p>
      Transformar dados em ação prática é o que diferencia operações agrícolas resilientes. Este artigo
      reúne aprendizados coletados com clientes Brever em diferentes regiões do país.
    </p>
    <p>
      Utilize os insights abaixo como ponto de partida para adaptar processos de campo e evoluir
      indicadores de produtividade, abastecimento e sustentabilidade.
    </p>
  </>
);

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.id === slug);

  if (!post) {
    notFound();
  }

  const body = articleContent[post.id] ?? defaultContent;

  return (
    <div className="bg-bg text-text">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
        >
          ← Voltar para o blog
        </Link>
        <div className="mt-6 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">{post.category}</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="relative h-[420px] w-full overflow-hidden rounded-none">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-0">
        <Prose className="space-y-4">{body}</Prose>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-0">
        <NewsletterCTA />
      </div>
    </div>
  );
}
