<template>
    <div id="app">
        <div class="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative flex flex-col items-center lg:flex-row lg:py-9">
                        <div class="flex-1 py-10 text-center text-white ltr:lg:text-left rtl:lg:text-right">
                            <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[55px] lg:leading-[70px]">
                                Chi cuadrada usando un dataset del Titanic
                            </h2>
                        </div>
                        <div>
                            <img
                                src="/assets/images/proba/Titanic/Titanic.png"
                                alt="Sierpinski-triangle"
                                class="rtl:rotate-y-0 mx-auto mb-8 w-full max-w-[560px] md:mb-0"
                                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="py-6 dark:bg-gray-dark lg:py-6">
            <div class="container">
                <div class="block">
                    <h1 class="text-xl font-bold mb-4">Chi cuadrada</h1>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-11">
                            <p class="mb-2 text-justify">
                                La distribución Chi cuadrada es una distribución de probabilidad que se utiliza en estadística para analizar datos y realizar
                                pruebas de hipótesis, es importante porque es la base de varios procesos de inferencia estadística debido a su relación con la
                                Distribución Normal.
                            </p>
                            <p class="mb-2 text-justify">
                                La distribución chi cuadrada se denota como χ² y tiene un parámetro llamado <b>"grados de libertad"</b>. El número de grados de
                                libertad está relacionado con la cantidad de variables categóricas en la tabla de contingencia utilizada en la prueba de chi
                                cuadrada.
                            </p>
                            <h2 class="text-lg font-bold mt-4">Definición</h2>
                            <div>
                                <p class="text-justify">
                                    Sea <i>v</i> un entero positivo. Se dice que una variable aleatoria <i>X</i> tiene una distribución chi-cuadrada con
                                    parámetro <i>v</i> si la función de densidad de probabilidad de <i>X</i> es la densidad gamma con $$\alpha = \frac{v}{2}$$ y
                                    $$\beta={2}$$. La función de densidad de probabilidad de una variable aleatoria Chi cuadrada es entonces:
                                </p>
                                <p class="mt-2 text-center">
                                    $$χ^2(x; v) = (\frac{1}{2^{(\frac{v}{2})}* Γ(\frac{v}{2})}) * (x^{((\frac{v}{2})-1)}* e^{(\frac{-x}{2})} )$$
                                </p>
                                <p>
                                    Donde:
                                    <ul>
                                        <li>
                                        \(\Gamma\) es la función gamma,
                                        </li>
                                        <li>
                                        \(v\) es el número de grados de libertad, y
                                        </li>
                                        <li>
                                        \(e\) es la constante de Euler.
                                        </li>
                                    </ul>
                                </p>
                                <p class="my-2 text-justify">
                                    El parámetro <i>v</i> se llama <b>grados de libertad</b> (gl) de <i>X</i>. A menudo se utiliza el símbolo $$χ^{2}$$.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="col-span-11 text-justify">
                            <h2 class="text-lg font-bold">Análisis de Chi cuadrado</h2>
                            <p>
                                El conjunto de datos del Titanic es un conjunto de datos que contiene detalles de los pasajeros a bordo del Titanic cuando encontró su destino
                                en 1912. 
                            </p>
                            <p>Para mayor información de la prueba, consulte <a class="text-secondary " href="https://www.youtube.com/watch?v=YC2w7pv-7DA">este repositorio</a> y para introducción a Chi cuadrado puede mirar este <a class="text-secondary" href="https://www.youtube.com/watch?v=YC2w7pv-7DA">video</a>.</p>
                        </div>
                        <div class="language my-2">
                            <code class="language-python" v-html="formattedCode"></code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { useAppStore } from '@/stores/index';
    import MathLive from 'mathlive';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism.css';
    import 'prismjs/components/prism-python';
    import 'prismjs/components/prism-rust';

    export default {
        name: 'app',
        components: {},
        data: function () {
            return {
                codeA: `
                ## Distribución de Chi Cuadrada
## Alumna: Marisela Cadena


library(tidyverse)
library(reticulate)
library(gmodels)

names(titanic_dataset)
str(titanic_dataset)
summary(titanic_dataset)


titanic_dataset$Survived <- factor(titanic_dataset$Survived, 
                              levels = c(0,1), 
                              labels = c("Dead", "Survived"))

titanic_dataset$Sex <- factor(titanic_dataset$Sex,
                         levels = c("male","female"),
                         labels = c("Male","Female"))

titanic_dataset$Embarked <- factor(titanic_dataset$Embarked, levels = c("C", "Q", "S"))

titanic_dataset$Pclass <- factor(titanic_dataset$Pclass, 
                            levels = c(1,2,3),
                            labels = c("First Class", 
                                       "Second Class", 
                                       "Third Class"))

rand.impute <- function(x) {
  missing <- is.na(x) 
  n.missing <- sum(missing)
  x.obs <- x[!missing]
  imputed <- x
  imputed[missing] <- sample(x.obs, n.missing, replace = TRUE)
  return (imputed)
}

titanic_dataset$Age <- rand.impute(titanic_dataset$Age)

#Sobrevivientes en función del sexo
CrossTable(titanic_dataset$Sex, titanic_dataset$Survived, dnn = c("Sex", "Survived"))

titanic_dataset %>% 
  ggplot() +
  geom_bar(mapping = aes(Sex, fill = Survived))

#Sobrevivientes en función de la clase

CrossTable(titanic_dataset$Pclass, titanic_dataset$Survived, dnn = c("Pclass", "Survived"))

titanic_dataset %>% 
  ggplot()+
  geom_bar(mapping = aes(x = Pclass, fill = Survived))

#Sobrevivientes en función de la edad
titanic_dataset$Age.cat <- cut(titanic_dataset$Age, 
                          breaks = c(0, 14, 24, 64, Inf),
                          labels = c("Niño", "Joven", "Adulto", "Mayor"))

round(prop.table(table(titanic_dataset$Age.cat, 
                       titanic_dataset$Survived,
                       dnn =  c("Age", "Survived(%)")), 1)*100,2)

titanic_dataset %>% 
  ggplot()+
  geom_bar(aes(Age.cat, fill = Survived))

#Sobrevivientes en función del embarque

CrossTable(titanic_dataset$Embarked, 
           titanic_dataset$Survived, 
           dnn = c("Embarked", "Survived"))
titanic_dataset %>% 
  ggplot()+
  geom_bar(mapping = aes(x = Embarked, fill = Survived))

#Sobrevivientes en función al  número de Hermanos/Cónyuges a bordo del Titanic 

titanic_dataset %>% 
  ggplot()+
  geom_bar(mapping = aes(x = SibSp, fill = Survived))

#Sobrevivientes en función al número de Padres/Hijos a bordo del Titanic

titanic_dataset %>% 
  ggplot()+
  geom_bar(mapping = aes(x = Parch, fill = Survived))



`,
                formula: 'f(x)',
                config: {
                    smartMode: false,
                    virtualKeyboardMode: 'manual',
                },
                store: useAppStore(),
            };
        },
        mounted() {
            MathLive.renderMathInDocument();

            const spanElements = document.querySelectorAll('span[data-original-content]');
            spanElements.forEach((spanElement) => {
                spanElement.style.display = 'none';
            });
        },
        computed: {
            formattedCode() {
                return Prism.highlight(this.codeA.trim(), Prism.languages.rust, 'rust').replace(/\n/g, '<br>');
            },
        },
    };
</script>
