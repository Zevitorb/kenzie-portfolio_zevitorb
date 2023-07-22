// Styles
import { Container } from "@/styles/Global"
import { Text } from "@/styles/Text"
import { Button } from "@/styles/Buttons"

// Components
import { Stack } from "@/components/Stack"
import { Project } from "@/components/Project"

// Data
import { stackData } from "@/utils/stackData"
import { userData } from "@/utils/userData"

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style"

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Em busca de uma realização profissional já fiz de tudo, desde
              servente de pedreiro a auxiliar administrativo. Até meus 20 anos
              trabalhei em empresa de família, onde já exerci alguns cargos como
              administrativo, comercial, estoquista, representante externo e
              sempre que precisava ajuda em qualquer setor. Seguinte a isso eu
              fui trabalhar em uma imobiliária de Blumenau, onde adquiri uma boa
              experiência como corretor de imóveis de aluguel, desenvolvendo
              mais organização e compromisso devido aos clientes. Hoje sinto que
              encontrei o meu objetivo de vida na programação. Sou uma pessoa
              pró-ativa e sou de fácil convívio, sempre buscando novas amizades,
              então nunca tive problemas por onde passei. Atualmente estou
              estudando Desenvolvimento Web Full Stack na Kenzie Academy, onde
              já passei por tecnologias como HTML, CSS e Javascript, Typescript,
              React.Js, Next.Js, Node, Python, Django, Express e continuando...
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  )
}
