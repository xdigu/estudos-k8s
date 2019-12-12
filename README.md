# Estudos-k8s
Para estudo do kubernetes estou utilizando minikube, caso queira reproduzir os estudo instale o minikube e kubectl em sua maquina.

Todas as imagens do docker feitas estão sendo geradas no [dockerhub](https://hub.docker.com/r/xdigu/estudos-k8s)

Os scripts do Kubernetes irão criar um deploy da applicação, um serivce para que possamos acessar a aplicação e um horizontal pod autoscaling que irá escalar a aplicação caso ela atinja uma determinada porcentagem de uso do cpu.

Para rodar os scripts execute:
``` sh
$ kubectl create -f kubernetes/deployment.yml
$ kubectl create -f kubernetes/service.yml
$ kubectl create -f kubernetes/hpa.yml
```

Vamos dar uma olhada em tudo que foi criado:
``` sh
$ kubectl get all
```

Para acessar a aplicação iremos dar uma olhada a qual ip nosso service foi atrelado:
``` sh
$ minikube service estudos-k8s
```

Com esse comando conseguimos visualizar tudo que está rodando no nosso cluster.

Abra o arquivo `kubernetes/deployment.yml` e alterer a linha `image: rjorge/estudos-k8s:0.0.1` para `image: rjorge/estudos-k8s:latest` para que possamos simular um novo deploy e acompanhar o comportamento da aplicaçãp.

Vamos aplicar a alteração feita para que nosso cluster possa subir a nova versão da aplicação:
``` sh
$ kubectl apply -f kubernetes/deployment.yml
```

Para que possamos ver toda alteração ocorrendo iremos executar o comando de visualizar o nosso cluster porém de uma maneira que ele se atualize a cada segundo:
``` sh
$ watch -n 1 kubectl get all
```

Com isso conseguimos ver os novos pods subindo com a nova versão em quando os pods com a versão antiga são desligados, em paralelo você consegue ver isso com mais facilidade acessando a aplicação pelo ip que foi informado pelo service e acessando a roa `/version`.

Ao final de todo processo de deploy nossa aplicação estará funcionando na nova versão.

That's all folks.
