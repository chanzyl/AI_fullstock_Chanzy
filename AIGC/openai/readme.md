# 跨境电商
AI 开店
玩具店 -> 拼多多海外版
- 翻译？ NLP 解决 不用google翻译，写程序
    pipeline('translate)
- 卖什么货？、卖多少钱？、营销内容怎么写有搞头
    可用AIGC生成
- 如何让openai 帮你开店？
    大模型（openai 接口调用） + Prompt Engineer (编写Prompt)


## Prompt 工程
    会问问题的人比解决问题的更厉害
    大模型超越了大部分人的能力

## openai 封装过程
    使用python语言
    特别适合NLP
    一个功能就一种写法
    风格：缩进
    def get_response(prompt):
    调用了openai库的Completions模块（其他模块）.create方法
    completions = openai.C, completions.create(
        engine=,
        prompt=, 吴恩达prompt
        temperature=0
        max_tokens=512,
    )
    print(completions)
    result = completions[0].choices.text
    return result