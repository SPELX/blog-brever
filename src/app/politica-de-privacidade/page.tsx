import { Prose } from "@/components/blog/Prose";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-8 lg:py-16">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Política de privacidade</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">Compromisso com seus dados.</h1>
        <p className="mt-4 text-lg text-text-muted">
          A Brever trata informações pessoais em conformidade com a LGPD e boas práticas de segurança.
        </p>
      </header>

      <Prose>
        <p>
          Esta política descreve como coletamos, usamos e compartilhamos dados pessoais ao longo da
          experiência com nossos produtos, eventos e comunicações.
        </p>

        <h2>1. Dados coletados</h2>
        <ul>
          <li>Informações de contato fornecidas em formulários e interações comerciais.</li>
          <li>Dados de navegação e métricas agregadas para melhorar a experiência no site.</li>
          <li>Registros operacionais para suporte e implantação da plataforma.</li>
        </ul>

        <h2>2. Finalidades e bases legais</h2>
        <p>
          Utilizamos os dados para responder contatos, enviar conteúdos, cumprir obrigações
          contratuais e aprimorar nossos serviços. Quando necessário, solicitamos consentimento
          explícito.
        </p>

        <h2>3. Compartilhamento</h2>
        <p>
          Compartilhamos informações apenas com parceiros essenciais (provedores de armazenamento,
          suporte e analytics), seguindo contratos e controles de segurança.
        </p>

        <h2>4. Direitos dos titulares</h2>
        <p>
          Você pode solicitar confirmação de tratamento, correção, portabilidade ou exclusão dos dados.
          Basta escrever para <a href="mailto:privacidade@brever.com.br">privacidade@brever.com.br</a>.
        </p>

        <h2>5. Segurança e retenção</h2>
        <p>
          Adotamos controles técnicos e administrativos para proteger as informações. Dados são
          mantidos apenas pelo tempo necessário às finalidades originais.
        </p>
      </Prose>
    </div>
  );
}
