# Respostas — Lista de Exercícios: Camada Física e Camada de Enlace

## 1. Questões Teóricas

**1. Papel da Camada Física**

A Camada Física é responsável por transmitir bits brutos (0s e 1s) através do meio de comunicação físico, sem se preocupar com o significado desses bits. Ela define aspectos como:
- Tipo de meio (cabo de cobre, fibra óptica, ar/rádio);
- Características elétricas, ópticas ou eletromagnéticas dos sinais;
- Taxa de transmissão (bits por segundo);
- Conectores, pinagem e topologia física.

Os tipos de sinais que ela manipula podem ser **elétricos** (tensão em cabos de cobre), **ópticos** (pulsos de luz em fibra óptica) ou **eletromagnéticos** (ondas de rádio em transmissão sem fio).

---

**2. Meios guiados x não guiados**

- **Guiados**: o sinal é conduzido por um meio físico sólido, como um cabo. Exemplos: par trançado (redes Ethernet de escritório) e fibra óptica (backbones de operadoras, data centers, conexões de longa distância com alta velocidade).
- **Não guiados**: o sinal se propaga livremente pelo ar/espaço, sem um condutor físico. Exemplo: Wi-Fi (redes locais sem fio), Bluetooth (conexão de curto alcance entre dispositivos) e comunicação via satélite (áreas remotas, sem infraestrutura cabeada).

---

**3. Fibra óptica x par trançado UTP**

| Critério | Fibra Óptica | Par Trançado UTP |
|---|---|---|
| Largura de banda | Muito superior (Gbps a Tbps) | Limitada (até 10 Gbps em Cat6a/Cat7, na prática) |
| Atenuação | Baixíssima, permite longas distâncias (dezenas de km sem repetidor) | Alta, limitada a ~100 metros |
| Interferência eletromagnética | Imune, pois usa luz, não eletricidade | Suscetível a EMI e ruído externo |

Em resumo, a fibra óptica é superior tecnicamente em quase todos os aspectos, mas o UTP continua amplamente usado por seu **baixo custo** e **facilidade de instalação/manutenção** em redes locais.

---

**4. Função da Camada de Enlace**

A Camada de Enlace de Dados é responsável por garantir a comunicação confiável entre dois nós conectados ao mesmo meio físico (mesmo segmento de rede). Suas funções principais incluem:
- Organizar os bits recebidos da Camada Física em **quadros (frames)**;
- Realizar **controle de acesso ao meio** (evitar colisões quando vários dispositivos compartilham o mesmo meio);
- Fazer **detecção (e às vezes correção) de erros** de transmissão;
- Endereçar os dispositivos localmente através do **endereço MAC**.

---

**5. Enquadramento (Framing)**

Framing é o processo de dividir o fluxo contínuo de bits vindos da Camada Física em unidades organizadas chamadas **quadros**, delimitando onde cada quadro começa e termina, e adicionando cabeçalhos (com endereços MAC de origem/destino) e trailers (com códigos de verificação de erro, como o CRC).

É necessário porque a Camada Física apenas transmite um fluxo bruto de bits — sem o enquadramento, o receptor não teria como saber onde uma mensagem termina e outra começa, nem verificar se os dados chegaram corretos.

---

**6. CSMA/CA x Ethernet comutada**

- **CSMA/CA (Wi-Fi)**: como o meio (ar) é compartilhado e não é possível detectar colisões de forma confiável durante a transmissão, o protocolo tenta **evitar** colisões. Antes de transmitir, o dispositivo "escuta" o canal; se estiver livre, espera um tempo aleatório (backoff) e então transmite. Também pode usar mensagens de controle RTS/CTS para reservar o canal.
- **Ethernet comutada (switch)**: em redes modernas com switches, cada porta forma um **domínio de colisão próprio** (full-duplex), então normalmente não há disputa pelo meio — o switch encaminha os quadros diretamente para a porta de destino com base no endereço MAC, eliminando a necessidade de métodos como o antigo CSMA/CD (usado em hubs/redes compartilhadas).

---

**7. Endereço MAC**

O endereço MAC (Media Access Control) é um identificador único atribuído à interface de rede (placa de rede) de um dispositivo. Características:
- **Tamanho**: 48 bits (6 bytes);
- **Formato de representação**: geralmente em hexadecimal, separado por dois-pontos ou hífens, ex.: `00:1A:2B:3C:4D:5E`;
- **Unicidade**: os primeiros 3 bytes (24 bits) identificam o fabricante (OUI – Organizationally Unique Identifier), e os últimos 3 bytes são definidos pelo próprio fabricante, garantindo (teoricamente) que cada endereço seja único no mundo.

---

**8. Por que o MAC tem escopo local**

O endereço MAC não possui estrutura hierárquica relacionada à topologia da rede — ele é fixo na placa de rede e não indica onde o dispositivo está localizado na Internet. Por isso, roteadores não conseguem usá-lo para decidir o melhor caminho entre redes distintas. Ele só tem significado **dentro do mesmo domínio de broadcast/LAN**, sendo usado apenas para entrega "salto a salto" (hop a hop). Para tráfego de longa distância, é o **endereço IP** (hierárquico, dividido em rede e host) que permite o roteamento entre redes.

---

**9. Objetivo do ARP**

O ARP (Address Resolution Protocol) tem como objetivo **mapear um endereço IP para o endereço MAC correspondente** dentro de uma rede local. Quando um dispositivo precisa enviar um quadro Ethernet para outro host cujo IP ele conhece, mas não o MAC, ele envia uma requisição ARP em broadcast perguntando "quem tem esse IP?", e o dono do IP responde com seu endereço MAC.

---

**10. Papel do Wireshark**

O Wireshark é uma ferramenta de análise de tráfego de rede (sniffer/analisador de protocolos) que captura os pacotes que trafegam por uma interface de rede e permite inspecionar detalhadamente seu conteúdo, camada por camada (Ethernet, IP, TCP/UDP, aplicação).

É indispensável em situações como:
- Diagnóstico de falhas de conectividade ou lentidão na rede;
- Investigação de incidentes de segurança (detecção de tráfego malicioso, varreduras de porta, ataques);
- Verificação de configuração de protocolos (ex.: confirmar se o ARP e o DNS estão funcionando corretamente);
- Auditoria e aprendizado sobre o funcionamento real dos protocolos de rede.

---

## 2. Análise de Caso

**Cenário**: computador novo não acessa a rede; LED da porta do switch apagado; placa de rede do computador não acende.

**Camada do problema**: O problema está na **Camada Física**. Os sintomas (LEDs apagados nos dois pontos) indicam ausência de sinal elétrico/óptico entre os dispositivos — ou seja, não há sequer conectividade no nível de bits, o que é característico de falha física, e não de enlace (que pressupõe que a conexão física já está ativa).

**Verificações iniciais recomendadas**:
1. **Verificar o cabo de rede**: testar se está bem conectado nas duas pontas (computador e switch) e se não está danificado (crimpagem, rompimento interno) — trocar por um cabo sabidamente funcional.
2. **Verificar a porta do switch**: testar o mesmo cabo em outra porta do switch para descartar porta defeituosa.
3. **Verificar a placa de rede do computador**: conferir se está bem encaixada (caso seja placa PCI) ou se o driver está instalado e habilitado no sistema operacional; testar em outro computador, se possível.
4. **Verificar alimentação do switch**: confirmar que o switch está ligado e operando normalmente (LEDs de energia acesos).
5. Somente após confirmar que a conexão física está estabelecida (LEDs acesos), passar a investigar problemas de camada de enlace (configuração de VLAN, duplex, etc.), se o problema persistir.

---

## 3. Tabela Comparativa: Meios Físicos

| Meio Físico | Tipo (Guiado/Não Guiado) | Principal Vantagem | Principal Limitação |
|---|---|---|---|
| **Par Trançado UTP (Cat6)** | Guiado | Baixo custo e fácil instalação/manutenção | Alcance limitado (~100 m) e suscetível a interferência eletromagnética |
| **Fibra Óptica Monomodo** | Guiado | Altíssima largura de banda e longo alcance com baixíssima atenuação | Custo elevado de instalação, equipamentos e manuseio (fragilidade, precisão nos conectores) |
| **Wi-Fi (IEEE 802.11ac)** | Não Guiado | Mobilidade e flexibilidade (sem necessidade de cabeamento) | Sinal suscetível a interferências, obstáculos e compartilhamento de banda entre usuários |

---

## 4. Laboratório Prático

O laboratório (Packet Tracer + Wireshark) é uma atividade prática que deve ser executada por você mesmo(a), já que depende de observação direta das ferramentas. Aqui está um guia de apoio para o que observar em cada etapa:

### Packet Tracer
- Ao montar a topologia (1 switch + 2 PCs) com cabos *Copper Straight-Through*, os links devem ficar **verdes**, indicando conexão física ativa (equivalente ao "LED aceso" da Camada Física).
- No **Simulation Mode**, ao enviar o PING, observe que **antes do ICMP**, ocorre uma requisição **ARP** (se os PCs ainda não conhecem o MAC um do outro): o PC de origem envia um broadcast ARP, recebe a resposta com o MAC do destino, e só então envia o quadro ICMP encapsulado com o endereço MAC correto.
- Repare no ícone do envelope colorido animando entre os dispositivos — isso representa o quadro (frame) trafegando na Camada de Enlace sobre o sinal físico do cabo.

### Wireshark
- Ao capturar tráfego e filtrar por `arp`, você deve visualizar os pacotes de "Who has [IP]? Tell [IP]" (requisição) e a resposta correspondente com o MAC.
- Ao filtrar por `icmp`, encontrará os pacotes de *Echo Request* e *Echo Reply* do ping para 8.8.8.8.
- Na seção **Ethernet II** de qualquer pacote, você verá os campos `Source` e `Destination` com os endereços MAC de 48 bits em hexadecimal, confirmando na prática o conceito do endereçamento da Camada de Enlace.

> **Observação**: como esta parte depende de captura em tempo real na sua máquina, recomendo executar os passos e, se quiser, me enviar prints ou descrever o que apareceu — posso te ajudar a interpretar os resultados.
