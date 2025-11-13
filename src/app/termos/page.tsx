import { Prose } from "@/components/blog/Prose";

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-8 lg:py-16">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Termos de uso</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">Condições para uso do Brever.</h1>
        <p className="mt-4 text-lg text-text-muted">
          Ao acessar este site ou contratar nossos serviços, você concorda com as regras abaixo.
        </p>
      </header>

      <Prose>
        <h2>1. Aceite e atualização</h2>
        <p>
          Podemos atualizar os termos periodicamente. O uso contínuo dos serviços após alterações
          indica concordância com a nova versão.
        </p>

        <h2>2. Uso adequado</h2>
        <p>
          Não é permitido explorar vulnerabilidades, reutilizar conteúdos sem autorização ou violar
          leis aplicáveis. Reservamos o direito de suspender contas que infrinjam estas regras.
        </p>

        <h2>3. Conteúdos e propriedade intelectual</h2>
        <p>
          Marcas, textos, imagens e softwares da Brever são protegidos por direitos autorais. Você
          pode referenciar nossos materiais desde que cite a fonte e não faça uso comercial
          indevido.
        </p>

        <h2>4. Limitação de responsabilidade</h2>
        <p>
          Trabalhamos para manter o serviço disponível, mas não garantimos ausência de interrupções.
          A Brever não se responsabiliza por prejuízos decorrentes de mau uso ou indisponibilidades
          fora do nosso controle.
        </p>

        <h2>5. Contato</h2>
        <p>
          Dúvidas podem ser enviadas para <a href="mailto:juridico@brever.com.br">juridico@brever.com.br</a>.
        </p>
      </Prose>
    </div>
  );
}
