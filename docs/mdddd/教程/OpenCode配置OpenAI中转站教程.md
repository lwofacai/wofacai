# OpenCode 配置 OpenAI 中转站教程

优质VPN[🔍白羊加速](https://baiyangjiasu.com/register?invite=RWqaczzt)家庭IP #chatGPT #Cloud code 不降智

VPN 梯子 翻墙：https://baiyangjiasu.com/register?invite=RWqaczzt

> 适用于 OpenCode 桌面端 / TUI 终端，Windows / macOS / Linux 通用。

---

## 前提条件

- 已安装 [OpenCode](https://opencode.ai)
- 有一个 OpenAI 兼容的中转站地址（如 cpolar 隧道、one-api、new-api 等）
- 有中转站对应的 API Key

---

## 一、找到配置文件

| 系统    | 配置文件路径                                         |
| ------- | ---------------------------------------------------- |
| Windows | `C:\Users\你的用户名\.config\opencode\opencode.json` |
| macOS   | `~/.config/opencode/opencode.json`                   |
| Linux   | `~/.config/opencode/opencode.json`                   |

> 如果文件不存在，手动创建一个即可。

---

## 二、添加 OpenAI Provider 配置

用任意文本编辑器打开 `opencode.json`，在 `provider` 字段下添加 `openai` 配置。

### 情况 1：配置文件是空的 / 新建的

直接写入以下内容：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://你的中转站地址/v1"
      }
    }
  }
}
```

### 情况 2：已有其他 provider 配置（如 google）

在现有 `provider` 里追加 `openai` 即可，注意逗号：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "google": {
      "...已有配置不动..."
    },
    "openai": {
      "options": {
        "baseURL": "https://你的中转站地址/v1"
      }
    }
  }
}
```

> **注意：** `baseURL` 末尾要加 `/v1`，大部分 OpenAI 兼容中转站都需要这个路径。

---

## 三、配置 API Key

打开 OpenCode，在输入框执行：

```
/connect
```

1. 选择 **OpenAI**
2. 选择 **Manually enter API Key**
3. 粘贴你中转站的 API Key，回车确认

> API Key 保存在 `~/.local/share/opencode/auth.json`，下次启动自动读取，无需重复输入。

---

## 四、选择模型并使用

在 OpenCode 输入框执行：

```
/models
```

在弹出的模型列表中，找到 **OpenAI** 分类，选择你需要的模型即可。

---

## 五、手动声明模型（可选）

如果模型列表里看不到你想用的模型（中转站可能转发了非官方模型），可以在配置里手动声明：

```json
{
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://你的中转站地址/v1"
      },
      "models": {
        "gpt-4o": {
          "name": "GPT-4o (中转)",
          "limit": {
            "context": 128000,
            "output": 16384
          }
        },
        "claude-3.5-sonnet": {
          "name": "Claude 3.5 Sonnet (中转)",
          "limit": {
            "context": 200000,
            "output": 8192
          }
        }
      }
    }
  }
}
```

> `models` 里的 key（如 `gpt-4o`）必须和中转站实际的模型 ID 一致。

---

## 六、Anthropic 中转站配置

如果你的中转站也转发了 Anthropic（Claude）系列模型，同样可以配：

```json
{
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://你的中转站地址"
      }
    }
  }
}
```

> **注意：** Anthropic 的 baseURL 通常**不需要**加 `/v1`，具体看你中转站的文档。

---

## 常见中转站 baseURL 参考

| 中转站类型        | baseURL 格式                         |
| ----------------- | ------------------------------------ |
| one-api / new-api | `https://your-domain.com/v1`         |
| cpolar 隧道       | `https://xxxxxx.r35.cpolar.top/v1`   |
| Cloudflare Worker | `https://your-worker.workers.dev/v1` |
| 本地代理          | `http://127.0.0.1:3000/v1`           |

---

## 常见问题

### Q：改了配置不生效？

重启 OpenCode 即可。

### Q：cpolar 地址变了怎么办？

免费版 cpolar 每次重启隧道会换地址，需要重新改 `baseURL`。建议：

- 使用 cpolar 付费版固定域名
- 或者用其他支持固定域名的内网穿透工具（如 frp）

### Q：报错 "connection refused" 或超时？

1. 检查中转站是否正常运行
2. 浏览器直接访问 `https://你的中转站地址/v1/models`，看能否返回模型列表
3. 检查 `baseURL` 是否拼写正确，有没有多余的空格或斜杠

### Q：怎么验证请求确实走了中转站？

发一条消息后，去中转站后台查看请求日志，有对应记录就说明配置成功。

### Q：能同时用官方 API 和中转站吗？

可以。给中转站取一个自定义 provider 名字即可：

```json
{
  "provider": {
    "openai": {
      "...官方配置..."
    },
    "my-proxy": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "我的中转站",
      "options": {
        "baseURL": "https://你的中转站地址/v1"
      },
      "models": {
        "gpt-4o": {
          "name": "GPT-4o (中转)"
        }
      }
    }
  }
}
```

这样官方 OpenAI 和中转站会作为两个独立的 provider 出现在模型列表里。

---

## 完整配置示例

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://6636f549.r35.cpolar.top/v1"
      }
    }
  }
}
```

修改 → 保存 → 重启 OpenCode → `/connect` 输入 Key → `/models` 选模型 → 开始使用。

---
