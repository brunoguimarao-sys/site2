import os
import sys

def analisar_estrutura_e_conteudo(diretorio_raiz='.', nome_arquivo_saida='saida_consolidada.txt'):
    """
    Percorre uma estrutura de diretórios, lê o conteúdo de cada arquivo e
    salva a estrutura e o conteúdo em um único arquivo de texto.

    Args:
        diretorio_raiz (str): O caminho para o diretório inicial da análise.
                              O padrão é '.', que significa o diretório atual.
        nome_arquivo_saida (str): O nome do arquivo que armazenará o resultado.
    """
    # Converte o caminho para um caminho absoluto para garantir consistência.
    caminho_absoluto_saida = os.path.abspath(os.path.join(diretorio_raiz, nome_arquivo_saida))
    
    print(f"Analisando diretório: {os.path.abspath(diretorio_raiz)}")
    print(f"Salvando resultado em: {caminho_absoluto_saida}\n")

    try:
        # Abre o arquivo de saída em modo de escrita com codificação UTF-8.
        with open(caminho_absoluto_saida, 'w', encoding='utf-8', errors='replace') as arquivo_saida:
            # os.walk é a forma mais eficiente de percorrer uma árvore de diretórios.
            # Ele retorna o caminho do diretório, uma lista de subdiretórios e uma lista de arquivos.
            for dirpath, dirnames, filenames in os.walk(diretorio_raiz):
                
                # Escreve o cabeçalho para o diretório atual no arquivo de saída.
                # Isso ajuda a manter a visualização da estrutura de pastas.
                caminho_relativo = os.path.relpath(dirpath, diretorio_raiz)
                arquivo_saida.write(f"\n==================================================\n")
                arquivo_saida.write(f"DIRETÓRIO: {caminho_relativo}\n")
                arquivo_saida.write(f"==================================================\n\n")

                for nome_arquivo in filenames:
                    caminho_completo_arquivo = os.path.join(dirpath, nome_arquivo)

                    # --- Ponto Crítico ---
                    # Impede que o script tente ler a si mesmo ou o seu próprio arquivo de saída.
                    if os.path.abspath(caminho_completo_arquivo) == caminho_absoluto_saida:
                        continue
                    if os.path.basename(sys.argv[0]) == nome_arquivo and os.path.abspath(dirpath) == os.path.abspath(os.path.dirname(sys.argv[0])):
                        continue

                    # Escreve um separador para cada arquivo.
                    arquivo_saida.write(f"--- INÍCIO DO ARQUIVO: {os.path.join(caminho_relativo, nome_arquivo)} ---\n\n")
                    
                    try:
                        # Tenta ler o arquivo como texto.
                        # 'errors='ignore'' evita que o script pare se encontrar um caractere
                        # inválido (comum em arquivos binários como imagens ou executáveis).
                        with open(caminho_completo_arquivo, 'r', encoding='utf-8', errors='ignore') as arquivo_leitura:
                            conteudo = arquivo_leitura.read()
                            arquivo_saida.write(conteudo)
                            
                    except Exception as e:
                        # Se houver um erro (ex: falta de permissão), registra o erro no arquivo de saída.
                        arquivo_saida.write(f"!!! ERRO AO LER ESTE ARQUIVO: {e} !!!\n")
                    
                    # Escreve um rodapé para cada arquivo para delimitar claramente o conteúdo.
                    arquivo_saida.write(f"\n\n--- FIM DO ARQUIVO: {os.path.join(caminho_relativo, nome_arquivo)} ---\n\n")
    
    except IOError as e:
        print(f"Erro de E/S ao tentar escrever o arquivo de saída: {e}")
    except Exception as e:
        print(f"Ocorreu um erro inesperado: {e}")

    print("Processo concluído com sucesso!")


if __name__ == "__main__":
    # Chama a função principal. O script começará a partir da pasta onde ele for executado.
    analisar_estrutura_e_conteudo()