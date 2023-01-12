# j_template_nextjs-typescript_ssg

## 目次

- [推奨環境](#推奨環境)
- [ファイル・ディレクトリ構成](#ファイル・ディレクトリ構成)
- [コマンド](#コマンド)
- [next.config.jsのカスタマイズ](#next.config.jsのカスタマイズ)
  - [scss/ts/tsxファイルのimport文のエイリアス](#scss/ts/tsxファイルのimport文のエイリアス)
  - [export時（本番ファイル生成時）のファイルのパス](#export時（本番ファイル生成時）のファイルのパス)
  - [Image Optimization API を利用している場合の注意点](#Image\_Optimization\_API\_を利用している場合の注意点)
- [環境変数](#環境変数)
- [ページの作成方法](#ページの作成方法)
  - [ページの作成方法一覧](#ページの作成方法一覧)
    - [固定ページを作成](#固定ページを作成)
    - [APIの返り値を元にページを生成](#APIの返り値を元にページを生成)
  - [その他のページ生成方法](#その他のページ生成方法)
  - [ダイナミックルート（Dynamic_Routes）](#ダイナミックルート（Dynamic_Routes）)
- [グローバルステートの状態管理](#グローバルステートの状態管理)
  - [TEA](#TEA)
    - [TEAとグローバルステート実装例の対応表](#TEAとグローバルステート実装例の対応表)
  - [グローバルステートの組み込み方](#グローバルステートの組み込み方)
  - [グローバルステートの外し方](#グローバルステートの外し方)
  - [グローバルステートの代替案](#グローバルステートの代替案)
  - [アプリのエラーハンドリング](#アプリのエラーハンドリング)
- [hooks](#hooks)
- [コンポーネント](#コンポーネント)
  - [componentsのディレクトリ構造](#componentsのディレクトリ構造)
  - [componentsのサンプル](#componentsのサンプル)
  - [コンポーネントの設計指針](#コンポーネントの設計指針)
    - [Atomic_Designの参考ページ](#Atomic_Designの参考ページ)
- [TypeScript](#TypeScript)
  - [ts,tsxのimportパス](#ts,tsxのimportパス)
  - [型](#型)
  - [ramda](#ramda)
  - [typedoc](#typedoc)
  - [Utility_Types](#Utility_Types)
- [SCSS](#SCSS)
  - [SCSSファイルのディレクトリ構造](#SCSSファイルのディレクトリ構造)
  - [ページコンポーネント用のscssモジュール](#ページコンポーネント用のscssモジュール)
  - [scssファイル内の@import文の補完](#scssファイル内の@import文の補完)
  - [postcssの設定（主にAutoprefixer）](#postcssの設定（主にAutoprefixer）)
- [Storybook](#Storybook)
  - [Storybookとは](#Storybookとは)
  - [Storybookのコマンド](#Storybookのコマンド)
  - [Storybookのカスタマイズ](#Storybookのカスタマイズ)
- [テスト](#テスト)
  - [テストファイルの格納先とディレクトリ構造](#テストファイルの格納先とディレクトリ構造)
  - [非同期関数のテスト](#非同期関数のテスト)
- [metaデータ](#metaデータ)
  - [基本的なmetaデータ](#基本的なmetaデータ)
  - [metaデータの型定義ファイル](#metaデータの型定義ファイル)
  - [metaデータの上書き](#metaデータの上書き)
- [sitemap.xmlの自動生成](#sitemap.xmlの自動生成)
  - [sitemap.xmlのカスタマイズ](#sitemap.xmlのカスタマイズ)
- [GoogleAnalytics](#GoogleAnalytics)
  - [GoogleAnalyticsの導入方法](#GoogleAnalyticsの導入方法)
  - [gtag.ts](#gtag.ts)
  - [GoogleAnalyticsの参考情報](#GoogleAnalyticsの参考情報)
- [エラーページ](#エラーページ)
- [その他](#その他)

## 推奨環境

|      | バージョン |
| ---- | ---------- |
| node | 16.13.1    |
| yarn | 1.22.17    |
| npm  | 8.3.0      |

**package.json に engines を設定して、Node.js のバージョンに制限をかけています**  
**本テンプレートを利用する場合は、Node.js のバージョンを v16 にあわせる必要があります。**  
**package.json の`"engines": {"node": "16.x"}`の記述を変更・削除することで、バージョン制限の解除が可能です。**

## ファイル・ディレクトリ構成

```
/
├── __tests__ … テストファイルを格納。
|   └── pages … ページコンポーネント用のテストファイルを格納。
├── .env.development … 開発用の環境変数定義ファイル（※.gitignore にて除外）
├── .env.production … 本番用の環境変数定義ファイル（※.gitignore にて除外）
├── .env.local … ローカル用の環境設定ファイル（※.gitignore にて除外）
├── .env.sample … 環境変数のサンプルファイル
├── .next … next.js 関連ファイル（ビルド時のキャッシュファイル等…）が格納。
├── .prettierrc … prettier の設定ファイル。
├── .storybook … storybook の設定ファイルを格納。
├── jest.config.js … Jest の設定ファイル
├── next-sitemap.js … sitemap.xml 生成用の設定ファイルです。
├── next-env.d.ts … next.js のenvの型定義ファイルです。※絶対に削除しないでください！
├── next.config.js … next.js 設定ファイルです。
├── out … 本番ファイル生成後（yarn export を実行後）のファイル一式が格納されます。
├── package.json
├── public … 静的ファイル（画像やpdfなど…）を格納。
|   └── assets
|       └── image … 静的画像を格納。
├── README.md
├── src … ソースディレクトリです。基本的に編集するファイルは src/ 配下に格納していきます。
|   ├── @types … 型定義（interface / type）を格納。
|   |   └── api … api 関連の型定義を格納
|   ├── assets … next.js のコアファイル以外を格納します。
|   |   ├── ts … ts / js を格納。
|   |   └── json … json を格納。
|   ├── components … 各コンポーネントを格納
|   |   ├── atoms … atoms コンポーネントを格納
|   |   ├── molecules … molecules コンポーネントを格納
|   |   ├── organisms … organisms コンポーネントを格納
|   |   └── templates … templates コンポーネントを格納
|   ├── hooks … プロジェクトで共通のカスタムフックを格納。
|   ├── pages … page コンポーネントを格納
|   ├── store … グローバルステートを格納
|   |   └── index.tsx … グローバルステートのサンプルファイル
|   └── styles … scss を格納
|       ├── config … scss の設定ファイルを格納
|       ├── common … プロジェクトで共通化する scss を格納
|       ├── libs … scss / css ライブラリファイルを格納
|       ├── pages … /src/pages/ 内の各 tsx ファイル用の scss モジュールを格納
|       ├── util … scss のユーティリティを格納
|       └── style.scss … グローバル scss
├── tsconfig.json … typescript の設定ファイルです。
├── tsdoc … typedocのドキュメントの生成先です。
└── yarn.lock
```

## コマンド

| コマンド                 | 内容                                                                                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| yarn dev                 | 開発環境が立ち上がります。                                                                                                                                                                          |
| yarn build               | ビルドファイルを生成します。.next 配下にビルドしたファイルが出力されます。<br/>（※build コマンドで生成されるファイルは node.js 上で運用するためのファイルです。SSG の本番ファイルではありません。） |
| yarn start               | yarn build で生成したファイルを元に、サーバーを起動してページを表示します。                                                                                                                         |
| yarn export              | 本番用ファイルを生成します。実行すると /out 配下に本番用ファイルが格納されます。                                                                                                                    |
| yarn export-with-sitemap | 本番用ファイルに加えて、sitemap.xml と robots.txt（任意）も生成し、/out 配下に格納します。                                                                                                          |
| yarn test                | Jest と React テストライブラリを使ったテストを実行します                                                                                                                                            |
| yarn storybook           | Storybook を立ち上げます                                                                                                                                                                            |
| yarn build-storybook     | Storybook の静的ページ（公開版）を生成します                                                                                                                                                        |
| yarn build-sitemap       | sitemap.xml と robots.txt（任意）を、/public 配下に格納します。<br/>※このコマンドを実行する前に、`yarn build` を実行してください。 build 後のファイルを参照して sitemap.xml を生成するためです。    |
| yarn lint                | es-lint を実行します                                                                                                                                                                                |
| yarn format              | prettier によるフォーマットを実行します                                                                                                                                                             |
| yarn typedoc             | typedoc コマンドにより、TypeScript のドキュメントを生成します。                                                                                                                                     |

## next.config.jsのカスタマイズ

### scss/ts/tsxファイルのimport文のエイリアス

- next.config.js と tsconfig.json に対して、import 文のパスにエイリアスが使えるように設定を追加しています。  
  これにより、scss/ts/tsx ファイルのそれぞれの import 文のパスに `@/XXX/YYY` と記載すると `@/` が `src/` に置換されます。  
  この設定はプロジェクト全体で有効のため、`.tsx`、`.ts`、`.scss`、`module.scss` はすべてエイリアスを使う事ができます。（もちろん通常通り、相対パスでつなげても問題ありません。）
- 上記の設定は storybook の設定と連動しています。  
  詳しくは [Storybook のカスタマイズ](#Storybookのカスタマイズ) をご確認ください。
- XXX.test.ts ファイルもパスの補完が可能です。 jest.config.js の moduleNameMapper に設定を追記しています。  
  設定の詳細を知りたい場合や、新たに設定を追記したい場合は、[moduleNameMapper | Jest](https://jestjs.io/ja/docs/configuration#modulenamemapper-objectstring-string--arraystring) をご確認ください。

### export時（本番ファイル生成時）のファイルのパス

本プロジェクトでは、トレイリングスラッシュを有効（next.config.js の`trailingSlash`を`true`）にしています。  
next.js はデフォルトで`hoge/index.jsx(.tsx)`を`hoge.html`として出力します。  
このデフォルトの挙動を無視して`hoge/index.html`として出力するためです。

しかし、上記の設定によって`index.jsx（.tsx）`以外のファイルもトレイリングスラッシュが有効になった状態で出力されます。  
例:) 404.tsx → 404/index.html  
これをどうしても避けたい場合は、next.config.js の`exportPathMap`に、トレイリングスラッシュを避けたいパスを追記してください。  
next.config.js に、コメントアウト済の設定方法が記載しましたので、そちらをご確認ください。

[> exportPathMap | next.js](https://nextjs.org/docs/api-reference/next.config.js/exportPathMap)

### Image\_Optimization\_API\_を利用している場合の注意点

Next.js v12.3 以降では、Image Optimization API を使用して Remote Images を最適化したい場合に、悪意のあるユーザーからアプリケーションを保護するために、Remote Images をホストしているドメインのリストを定義しておく必要があります。

[> Remote Patterns | Next.js](https://nextjs.org/docs/api-reference/next/image#remote-patterns)

## 環境変数

### はじめに

**環境変数ファイルには、非常に重要な情報を定義する事が考えられるため、リポジトリに含めないよう .gitignore で指定しています。**  
**本テンプレートのセットアップ時に、別途、環境変数ファイルを用意してください。**  
環境変数ファイルを用意せずに、`yarn dev` や `yarn build` コマンドを実行した場合、環境変数（`process.env.変数名`）は `undefined` になります。

本テンプレートのルートディレクトリ直下に、環境変数のサンプルとなる `.env.sample` を用意していますので、参考にしてください。

### 環境変数ファイル（.env）について

本テンプレートはルートディレクトリ直下に、以下の環境変数ファイルを配置する事を想定した構成になっています。

- .env.development … 開発環境（yarn dev 実行時）で読み込まれる変数をまとめたファイル。
- .env.production … 本番環境（yarn start, next build 実行時）で読み込まれる変数をまとめたファイル。

各環境別に変数を用意したい場合は、上記のファイルへ追記してください。  
**環境変数名は、大文字英数字のみのスネークケースにしてください。**  
また、クライアントサイドで使用する環境変数は、定義する変数名の先頭に NEXT_PUBLIC\_ をつけてください。  
NEXT_PUBLIC\_ がない場合はサーバーサイド側でのみ環境変数を使用できます。

## ページの作成方法

### ページの作成方法一覧

next.js では、/src/pages/ 内の tsx（jsx）を編集してページを作成します。  
本テンプレートでは、デフォルトで以下の方法に対応しています。  
もちろん適宜カスタマイズしていただいて問題ありません。

1. [固定ページを作成](#固定ページを作成)
2. [API の返り値を元にページを生成](#APIの返り値を元にページを生成)

#### 固定ページを作成

next.js の通常のページ作成方法と同様です。  
/src/pages/ 内に tsx（jsx） ファイルを用意して、ページを作成します。

#### APIの返り値を元にページを生成

API の返り値を元に、一覧ページと個別詳細ページを生成できます。

以下がサンプルページです。

- /src/pages/posts/index.tsx … API 返り値の一覧ページ
- /src/pages/posts/\[id].tsx … API 返り値の個別詳細ページ

上記のページでは [jsonplaceholder](https://jsonplaceholder.typicode.com/) の post 100 件分を fetch で取得し、その返り値を元に一覧ページ 1P ＋ 個別詳細ページ 100P を生成します。  
また、一覧ページにはページネーション、個別詳細ページにはパンくずリストのサンプルコンポーネントをそれぞれ用意しています。  
各コンポーネントは SSG に対応しており、本番ファイル生成時（yarn export 実行時）に各ページに組み込まれ、静的 html として生成されます。

※jsonplaceholder はダミーの js オブジェクトを返す Web サービスです。  
[> jsonplaceholder](https://jsonplaceholder.typicode.com/)

### その他のページ生成方法

next.js では様々なページ作成手法があります。  
WordPress や Contentful に対応した方法もありますので、気になる方は以下をご確認ください。  
[> Data Fetching | next.js](https://nextjs.org/docs/basic-features/data-fetching)

### ダイナミックルート（Dynamic_Routes）

next.js では、pages/ 配下のファイル名を`[]`で囲ったファイルを、ダイナミックルート（Dynamic Routes）ページとして扱います。  
例えば、`[id].tsx` としたページでは、id の部分が動的に切り替わるページとなります。  
ダイナミックルートページでは`getStaticPaths`を定義して、そのページが取りうる URL を指定する必要があります。  
詳しくは以下をご確認ください。  
[> Dynamic Routes | next.js](https://nextjs.org/docs/advanced-features/dynamic-import)

## グローバルステートの状態管理

アプリ全体の状態管理として、React hooks と useContext を使っています。  
`/src/store/index.tsx` にサンプルのグローバルステートを用意しています。

### TEA

本テンプレートでは、グローバルステートの状態管理に[TEA（The Elm Architecture）](https://guide.elm-lang.jp/architecture/)の考え方を採用しています。  
TEA は[TEA 公式ページ](https://guide.elm-lang.jp/architecture/)でも触れられているように、Redux や Vuex の基礎となった考え方です。  
TEA を取り入れる事で、複雑な状態管理を型安全かつシンプルな構造に保てます。

参考

- [TEA 公式ページ](https://guide.elm-lang.jp/architecture/)
- [React Hooks API で The Elm Architecture](https://zenn.dev/eagle/articles/react-tea-hook)

#### TEAとグローバルステート実装例の対応表

本テンプレートでは、TEA を下記の表にように輸入しています。  
`/src/store/index.tsx` に、そのサンプルを実装しています。

| 本テンプレート (React x TypeScript)                | TEA (Elm) |
| -------------------------------------------------- | --------- |
| state / ModelType                                  | Model     |
| &lt;Store.Provider&gt; 配下の jsx                  | View      |
| update(グローバルステート用 useReducer の更新関数) | Update    |
| MessageType                                        | Msg       |

TEA の考え方を取り入れてはいますが、状態管理の方法自体は、React の useReducer の基本的な使い方に則っています。  
ただ TEA を取り入れた事で大きく変更になったのが、Msg に相当する MessageType です。

慣習的に [useReducer](https://ja.reactjs.org/docs/hooks-reference.html#usereducer) は、更新関数に `{ state: {...}, action: { type: ..., payload: ... }}` の引数を取ります。  
本テンプレートでは、上記の `action.type` を TEA の[バリアント](https://guide.elm-lang.jp/types/custom_types.html)のように扱っています。

これにより、useReducer の更新関数の `switch` 文で厳密な型判定が可能になります。  
また、MessageType に[ジェネリクス](https://typescript-jp.gitbook.io/deep-dive/type-system/generics)を持たせる事で、柔軟な拡張が可能です。

##### おまけ

- `/src/store/index.tsx` のグローバルステート実装例は、オブジェクトの合併型を用いていますが、同じような事は [TypeScript タプル](https://typescript-jp.gitbook.io/deep-dive/type-system#tapuru)でも可能できます。お好みの方法で実装してください。
- バリアントを再現するためには、[TypeScript enum](https://typescript-jp.gitbook.io/deep-dive/type-system/enums) を用いた方が良いのでは？…と思われるかもしれませんが、[TypeScript の enum はデメリットがある](https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/)ため、代わりに合併型を使っています。

### グローバルステートの組み込み方

本テンプレートでは、以下のようにしてグローバルステートを適用しています。

1. `/src/store/` 配下に、グローバルステートを管理する `.tsx` ファイルを作成する
2. 1.で作成したファイル内で、`useReducer` を使って、グローバルステートの原型を作成します。
3. `createContext` を使って、2.で作成した原型をもとに、グローバルステートを作成します。
   グローバルステートは外部ファイルで読み込めるように `export` します。
4. アプリへグローバルストアを供給する `StoreProvider` を作成します。
   `StoreProvider` も外部ファイルで読み込めるように `export` します。
5. `/src/pages/_app.tsx` に `StoreProvider` を読み込み、`<Component {...pageProps} />` を囲みます。
6. これで各ページ・コンポーネントでグローバルステートが参照できるようになります。

サンプルファイルとして `/src/store/index.tsx` を用意しています。  
グローバルステートを適用する場合は、このファイルを参考にしてみてください。

また、グローバルステートを作成する時は、**1 アプリ = 1 グローバルステート**の構成することをオススメします。  
グローバルステートを単一にする事で、アプリの状態・フローをシンプルに保てます。

### グローバルステートの外し方

前述の通り、本テンプレートでは簡単なグローバルステートのサンプルを実装しています。  
グローバルステートが不要な場合は、以下の手順でテンプレートから関連の処理、および、ファイルを削除してください。

1. `/src/store/` を格納されたファイルごと削除する
2. `/src/pages/_app.tsx` の `/src/store/` から読み込んでいるモジュールをすべて削除する
3. `/src/pages/_app.tsx` の `<Component {...pageProps} />` を囲っている Provider を削除する
4. `/src/pages/index.tsx` の `/src/store/` から読み込んでいるモジュールをすべて削除する
   - この際に、グローバルステートの更新関数や、jsx に展開されたグローバルステートの値など、関連する変数や関数はすべて削除します。
5. 適宜、エラーの解消を行う。

### グローバルステートの代替案

本テンプレートでは `createContext`や`useReducer`を利用したグローバルステートのサンプルコードを実装していますが、もちろん、他のライブラリを利用しても構いません。  
以下が React/Next における有名な状態管理ライブラリです。個人的には Jotai を推奨します。

- [> Redux](https://redux.js.org/)
- [> Jotai](https://jotai.org/)
- [> Zustand](https://zustand-demo.pmnd.rs/)
- [> Recoil](https://recoiljs.org/)
  - Recoil は Production 版リリース前なので、注意!

### アプリのエラーハンドリング

JavaScript クライアントアプリの問題点として、エラーハンドリングが場当たり的になりやすい問題があります。
JavaScript ではエラーが発生した際、アプリの状態復元やハンドリングが難しいためです。

本テンプレートでは、グローバルステートにエラーオブジェクトを保存できるようにして、アプリ内で発生するエラーを管理するアプローチを採用しています。  
グローバルステートのエラーオブジェクト（Map オブジェクト）内に、アプリケーションで発生するすべてのエラーを set することで、各コンポーネントから共通のエラーを参照・更新することが可能です。  
これにより、エラーが発生した時の挙動を開発者がカスタマイズできます。

この実装方法は、エラーを特別なケースとして扱うのではなく、データとして扱う[TEA のエラーハンドリング](https://guide.elm-lang.jp/error_handling/)を参考にしています。

以下が、関連するサンプルファイルです。

- `/src/store/index.tsx`
- `/src/hooks/useError/useError.hooks.tsx`
- `/src/@types/apis/error.ts`

また、[Rust の Result 型](https://doc.rust-lang.org/std/result/)を、TypeScript（JavaScript）の Map オブジェクトを用いて、擬似的に再現するコードを実装しています。  
エラーが発生しうる関数や、副作用を扱う関数を実行する場合は、利用してみてください。
下記がサンプルコードのファイルです。

- `src/assets/ts/createResultMap/createResultMap.ts`

## hooks

React hooks はコンポーネント内に閉じ込めるのではなく、外部ファイルとして切り出して管理する事を推奨します。  
hooks を関数として外部ファイル化する事でテストしやすくなります。

以下のように管理すると良いでしょう。

- 1 コンポーネント = 1 hooks として、hooks の外部ファイルを作成する。
  - コンポーネントファイルと同階層に `コンポーネント名.hooks.ts` のファイルを作成する。
- もし、1 コンポーネント = 1 hooks に収まらない（複数のコンポーネントで使用する hooks）は、`/src/hooks/` 内に `useXXX.ts` として作成する。

## コンポーネント

本テンプレートのコンポーネント郡は、デフォルトで atomic design に則った粒度で作成しています。  
atomic design のママでも良いですし、自由にカスタマイズしていただいても OK です。

### componentsのディレクトリ構造

```
/
└── src
    ├── components … page 以外のコンポーネントファイル を格納
    |   ├── atoms … atoms コンポーネントファイル を格納
    |   ├── molecules … molecules コンポーネントファイル を格納
    |   ├── organisms … organisms コンポーネントファイル を格納
    |   └── templates … templates コンポーネントファイル を格納
    ├── pages … page コンポーネントを格納
    └── styles … scss を格納
        └── pages … /src/pages/ 内の各tsxのcssモジュールを格納
```

### componentsのサンプル

以下のリストは、コンポーネント 1 つのファイル構成のサンプルです。  
以下のような構成で、コンポーネントを作成する事をオススメします。

- Button.tsx … コンポーネントの核となるファイルです。このファイルでコンポーネントを定義します。
- Button.module.scss … コンポーネントのスタイルファイルです。
- Button.hooks.ts … コンポーネントの hooks を定義します。
- Button.stories.tsx … Storybook 用のファイルです。
- Button.test.tsx … コンポーネントのテストファイルです。

**※注意:) /src/pages/配下のページコンポーネントに適用する scss は、/src/styles/pages/ 配下に格納しています。**

#### コンポーネントの設計指針

本テンプレートにおいて、コンポーネント設計指針は Atomic design をベースにしています。  
プロジェクトに応じて、適宜変更してください。  
以下はコンポーネント設計指針の参考例です。

- Atoms
  - 単一責任であること
  - 汎用的な機能を提供すること
  - それ以上分割することができない最小単位の UI であること
  - アプリのロジックを持たないこと
  - グローバルステートへのアクセスは不可、かつ、更新ロジックを持たないこと
  - 他のコンポーネントに依存しないこと
- Molecules
  - 原則として単一責任であること
  - 汎用的な機能を提供すること
  - アプリのロジックを持たないこと
  - グローバルステートへのアクセスは不可、かつ、更新ロジックを持たないこと
  - Molecules が内包できるのは Atoms か Molecules のみであること
- Organisms
  - 原則として単一責任であること  
    Organisms にロジックを詰め込みすぎないこと
  - アプリのロジックが入ったら Organisms にすること  
    他に依存するコンポーネントがなかったとしても、アプリのロジックが入った時点で Organisms とする
  - グローバルステートへのアクセスは可とする  
    グローバルステートを更新できるかはケースバイケースとする
  - ロジックを持たずとも、複数の Atoms や Molecules を持つ場合は Organisms として扱うことを許可する  
    例: Header や Footer など。BEM でいう Block の粒度に相当する場合は Organisms として扱う
- Templates
  - レイアウトのみに責任を持つこと
  - グローバルステートへのアクセスは不可、かつ、更新ロジックを持たないこと
- Pages
  - Templates をはじめ、各コンポーネントをラップするコンポーネントであること
  - ページが持つロジックは、グローバルステート、もしくは Pages コンポーネントに集約すること  
    グローバルステートと Pages コンポーネントのどちらに集約するかはケースバイケースだが、[The Elm Architecture](https://guide.elm-lang.jp/architecture/)の考え方からグローバルステートに集約することを推奨する


#### Atomic_Designの参考ページ

- [> atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [> Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [> Atomic Design を分かったつもりになる | DeNA Design](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)

## TypeScript

### ts,tsxのimportパス

ts, tsx の import 文のパスには、エイリアスが利用できるよう next.config.js と tsconfig.json に設定を追記しています。  
詳細は[scss/ts/tsxファイルのimport文のエイリアス](#scss/ts/tsxファイルのimport文のエイリアス)を確認してください。

### 型

複数のコンポーネントや ts ファイルで共通で使用する型定義は、`/src/@types/` に格納する事をオススメします。  
1 ファイル内でしか使用しない型であれば、そのファイルの中に定義するだけで良いと思います。

### ramda

本テンプレートでは [ramda](https://ramdajs.com/) を採用しています。  
[ramda](https://ramdajs.com/) は JavaScript / TypeScript のユーティリティライブラリです。  
[R.clone](https://ramdajs.com/docs/#clone) ：ディープコピー、[R.equals](https://ramdajs.com/docs/#equals) ：ディープイコール…などの便利なメソッドが用意されています。  
また、特に JavaScript / TypeScript で関数型プログラミングを実現するのに役立ちます。

`import * as R from 'ramda'` もしくは `import { …必要な機能のみ…, } from 'ramda'` で読み込んだ上で使用します。  
[@types/ramda](https://www.npmjs.com/package/@types/ramda) もインストールしていますので、型安全になっています。

以下のファイルに ramda のサンプルファイルを実装しています。

- /src/assets/ts/util/ramdaSample/ramdaSample.ts
- /src/assets/ts/util/ramdaSample/ramdaSample.test.ts

ramda が不要な場合は上記サンプルファイルを削除し、下記のコマンドを実行すれば OK です。  
`yarn remove ramda @types/ramda` もしくは `npm uninstall ramda @types/ramda`

### typedoc

本テンプレートでは、[typedoc](https://typedoc.org/guides/overview/)を導入しています。  
`yarn typedoc` もしくは `npn run typedoc` を実行すると、tsdoc/ 配下に TypeScript のドキュメントファイルを生成します。  
ドキュメントの生成対象は `src/assets/ts` 配下の ts ファイルと、`src/@types` 配下の型定義ファイルです。　　
（※d.ts は除外しています。）

生成されるドキュメントは各.ts ファイルの JSDoc/TSDoc を元に生成されます。また、ドキュメント生成と同時に tsc コマンドによる型精査も行われた上でドキュメントに反映されます。  
したがって、JSDoc/TSDoc のコメントに誤りがあっても、ある程度の補完が効きます。

大規模プロジェクトを構築する場合は、.ts ファイルに、JSDoc/TSDoc コメントを記載し、適宜ドキュメントを生成すると良いでしょう。

参考リンク

- [> TypeDoc](https://typedoc.org/guides/overview/)

#### typedocの設定

typedoc の設定は、すべてコマンド実行時のオプションで指定しています。  
現状では設定しているオプションは下記の通りです。

- `--readme none`: tsdoc/配下に readme.md を出力しない
- `--cleanOutputDir true`: ドキュメント生成時に、前回出力のドキュメント一式を削除する
- `--excludeExternals false`: 外部ファイルの ts のドキュメントを生成しない。対象ファイルのみ生成する
- `--exclude '**/*+(.test|.spec|.e2e)*+(.ts|.js)' --exclude '**/*+(.tsx|.jsx|.d.ts)' --exclude '**/*+(.hook|.hooks)*+(.tsx|.jsx|.ts|.js)'`: ドキュメント生成対象の除外を指定。テストファイル、tsx/jsx、hooks、d.ts を除外する
- `--entryPointStrategy expand`: .ts ファイルごとにページを生成する
- `--out ./tsdoc/ ./src/`: ドキュメント生成先と、対象の.ts ファイルの格納先を指定

### Utility_Types

よく利用する TypeScript の Utility Types のサンプルコードを以下に格納しています。

- src/@types/sampleUtilityTypes.ts

参考リンク

- [> Utility Types | TypeScript](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [> ユーティリティ型 (utility type) | サバイバル TypeScript](https://typescriptbook.jp/reference/type-reuse/utility-types)

## SCSS

本テンプレートでは、scss(dart-sass)を導入しています。  
主にプロジェクト全体に適用する scss は /src/styles/ 配下に格納しています。  
また、デフォルトで css モジュールでコンポーネントを作成しています。  
src/components/ 配下の各コンポーネントディレクトリに XXX.module.scss を用意し、tsx に読み込む事で利用できます。

### SCSSファイルのディレクトリ構造

デフォルトのディレクトリ構造は以下の通りです。  
必要に応じて、適宜変更していただいて OK です。

```
/
└── src
    └── styles
        ├── config … scss の設定ファイルを格納
        |    ├── _base.scss … プロジェクト全体のベースとなるcssを記載。
        |    └── _variables.scss … プロジェクト全体で使用する変数を記載。
        ├── common … プロジェクトで共通化する scss を格納。
        ├── libs … scss / css ライブラリファイル（reset.cssなど…）を格納。
        ├── pages … /src/pages/ 内の各tsxファイル用のcssモジュールを格納。
        ├── util … scss のユーティリティファイルを格納
        |    ├── functions … scss内で使用する関数を格納。
        |    └── mixins … mixinを格納。
        └── style.scss … styles/ 配下の scss を取りまとめるscssです。このファイルを /src/pages/_app.tsx に読み込んで、プロジェクト全体に適用しています。
```

### ページコンポーネント用のscssモジュール

next.js では、/src/pages/配下のコンポーネントをページと見なすため、/src/pages/配下には scss モジュールを格納せずに、/src/styles/pages/配下に格納しています。  
ページ自体の css モジュールは、/src/styles/pages/ に格納してください。

### scssファイル内の@import文の補完

各 scss ファイル内では、`@import @/styles/` と記述する事で、`/src/styles/` 内を参照できるようになっています。（scss モジュールファイルでも同様です。）  
詳しくは[next.config.js のカスタマイズ](#next.config.jsのカスタマイズ)をご確認ください。

### postcssの設定（主にAutoprefixer）

next.js では postcss の基本的な設定（レガシーブラウザ対応の Autoprefixer 付与 / flexbox のバグ fix…）がデフォルトで適用されるようになっています。  
next.js 上での postcss の設定を上書きするファイル（postcss.config.json）を用意して、設定を追加する事も可能ですが、**その場合は 1 から全ての設定を記載する必要があります。**  
next.js は postcss.config.json がある場合、**デフォルトの postcss の設定を無視するためです。**  
したがって、本テンプレートでは特に postcss.config.json を作成せず、デフォルトのママになっています。

もし特殊なケースの対応等が必要になった場合は、適宜、設定ファイルを追加してください。  
詳しくは以下をご確認ください。

- [> customizing-postcss-config | next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- [> customizing-postcss-config（日本語） | next.js](https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/customizing-postcss-config)

## Storybook

### Storybookとは

本テンプレートでは Storybook を導入しています。  
コンポーネントの一覧ページを作成して、確認するためのツールです。  
[> Storybook](https://storybook.js.org/)

### Storybookのコマンド

| コマンド             | 内容                                         |
| -------------------- | -------------------------------------------- |
| yarn storybook       | Storybook を立ち上げます                     |
| yarn build-storybook | Storybook の静的ページ（公開版）を生成します |

### Storybookのカスタマイズ

基本的に Storybook 公式サイト通りに導入をしていますが、2 点だけ Storybook 内部の webpack に変更を加えています。

1. `.storybook/main.js` の `webpackFinal` に scss/ts/tsx ファイル内で使用している `@import` 文にエイリアスが使えるように設定を追加しています。  
   これにより scss/ts/tsx ファイル内で使用する `@import` 文に `@/XXX/YYY` のエイリアスを記載すると `@/` が `src/` に置換されます。  
   ※この設定は next.config.js の`@import`文のエイリアス設定と連動しています。  
   scss ファイルのディレクトリを移動したり、名称を変更する場合は next.config.js の設定も適宜、確認・修正をしてください。

2. `.storybook/main.js` の `webpackFinal` に scss ファイル内の画像パスを補完するように設定しています。  
   これにより、nextjs と storybook の webpack は、どちらも `/public/assets/image/` 配下の画像を参照するようになります。  
   デフォルトでは、画像のみパスの補完を行っていますので、Web フォントなどを使用する場合は、適宜 `.storybook/main.js` を編集してください。

## テスト

本テンプレートでは Jest と React テストライブラリを実装しています。  
テストコードは `yarn test` で実行できます。

### テストファイルの格納先とディレクトリ構造

テストファイルは基本的に、テスト対象ファイルと同じディレクトリに格納します。  
**`/src/pages/` 配下の `.ts`、`.tsx` のテストファイルのみ、`/__tests__` に格納してください。**  
next.js は、`/src/pages/` 配下のファイルをページと見なして、ルーティングに設定します。  
そのため、`/src/pages/` 配下にテストファイルを格納すると build エラーが発生してしまいます。これを回避するためです。

テスト対象ファイルとテストファイルを同じディレクトリに格納できない場合は、適宜、`/__tests__` 内にディレクトリを作成して、テストファイルを格納してください。

### 非同期関数のテスト

Jest で非同期関数を実行する場合、Jest の timeout の時間を上書きする事をオススメします。  
テストファイルに`jest.setTimeout(timeout 時間)`と記述する事で、上書きできます。  
詳しくは、`/src/assets/ts/postsApi.test.ts` を確認してください。サンプルコードを実装しています。  
もし、大量の非同期関数のテストを行う場合は、Jest の環境設定を変更した方が良いでしょう。

[> Jest timeout](https://jestjs.io/docs/jest-object#jestsettimeouttimeout)

## metaデータ

### 基本的なmetaデータ

基本的な meta データは /src/assets/json/meta の meta.json に記載しています。  
meta.json の内容を /src/pages/\_app.tsx に読み込んで、サイト全体の基本的な meta データとして設定しています。  
meta データを編集したい場合は、meta.json を編集してください。

### metaデータの型定義ファイル

/src/assets/json/meta/index.d.ts は meta.json の型定義ファイルです。  
必要に応じて修正・追記していただいて OK です。

### metaデータの上書き

meta 情報をページごとに上書きしたい場合は、next.js の`<Head></Head>`を使用してください。  
`<Head>`タグは、以下をご確認ください。  
[Head タグ | next.js](https://nextjs.org/docs/api-reference/next/head)

## sitemap.xmlの自動生成

本テンプレートでは、[next-sitemap](https://www.npmjs.com/package/next-sitemap) を利用しており、sitemap.xml と robots.txt（任意） を自動生成できます。  
`yarn build-sitemap` コマンドを実行すると、/public 配下に sitemap.xml と robots.txt が生成されます。

**`yarn build-sitemap` の前に、必ず `yarn build` を実行してください。**  
build 時に生成されるファイル（/.next/ 配下のファイル一式）を参照して、sitemap.xml を生成するため、ファイルがない場合は意図しない sitemap.xml が生成される可能性があります。

また、`yarn export-with-sitemap` コマンドを実行すると、本番用ファイルに加えて sitemap.xml と robots.txt も生成し、/out 配下に格納されます。

sitemap.xml が必要な方は… `yarn build` → `yarn build-sitemap`。生成された sitemap.xml が問題なければ、`yarn export-with-sitemap` で sitemap.xml を含めた本番ファイルを生成。  
sitemap.xml が必要ない方は…　`yarn export` のみで事足りるでしょう。  
やりたい事にあわせて、適宜、コマンドを使い分けてください。

### sitemap.xmlのカスタマイズ

sitemap.xml と robots.txt の内容をカスタマイズした上で、生成する事も可能です。  
/next-sitemap.js が sitemap.xml 生成時のカスタマイズファイルになります。  
「特定のページを sitemap.xml に含めたくない」や「特定のページの優先度を上げたい」…などのカスタマイズをしたい場合は、このファイルを編集してください。

以下が公式サイトです。

- [> next-sitemap](https://www.npmjs.com/package/next-sitemap)
- [> sitemap.xml](https://www.sitemaps.org/ja/protocol.html)

## GoogleAnalytics

### GoogleAnalyticsの導入方法

Google Analytics のトラッキング ID を、`.env.production` 内にある `NEXT_PUBLIC_GA_ID` に入れることでページビューが計測できるようになります。  
また、`.env.development` にも `NEXT_PUBLIC_GA_ID` を設定する事ができます。  
dev サーバーで Google Analytics の発火を確認した場合は、`.env.development` にもトラッキング ID を設定すると良いでしょう。

`.env.production`と`.env.development`、詳しくは以下をご覧ください。  
[> 環境変数](#環境変数)

### gtag.ts

Google Analytics の処理自体は `src/assets/ts/gtag.ts` に記載されています。  
特定のイベントを計測したい場合は、上記ファイルの `event` 関数を適宜使用してください。

### GoogleAnalyticsの参考情報

- [next.js | Example app with analytics](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)
- [Next.js/TypeScript で本番/ステージング/ローカル環境別に Google Analytics を利用する](https://zuma-lab.com/posts/next-google-analytics-settings)
- [Next.js で Google Analytics を適用する（react-ga は使用しません）](https://qiita.com/b95oss/items/0402d2a0fa0edeecb67c)

## エラーページ

404 ページは `/src/pages/404.tsx` として用意しています。  
404 エラーページを調整したい場合は、このファイルを編集してください。  
その他のエラーページが必要な場合は、/src/pages/~ 配下に適宜作成してください。

- あくまで SSG のため、エラーページは全て静的なページとして吐き出されます。  
  そのため、本番 Web サーバーにて"400 / 500 系エラーが発生した場合、このページを表示する"といった設定を行う必要があります。
- SSG のため、500 系エラーページは最適化されません。  
  より細かいエラー番号のページをそれぞれ用意したい場合は適宜作成してください。

[> Next.js エラーページ](https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/custom-error-page)

## その他

### FOUC（CSSの適用遅れによるちらつき）が発生したときの暫定対策

Next.js を CSS Modules で構築している場合、稀に FOUC（CSS の適用遅れによるちらつき）が発生します。  
この現象は、空の`<script>`タグを、`<body>`開始タグの直後に配置する事で対応できます。  
（もしくは `useLayoutEffect` を使って、初期表示を調整する手段もあります。）

- [> FOUC using new Next.js 10 and React 17](https://github.com/vercel/next.js/issues/18769)
- [> Next.js + CSS Modules で FOUC（CSS の適用遅れによるちらつき）が発生したときの暫定対策](https://zenn.dev/catnose99/articles/3c106c81cbfdec)
