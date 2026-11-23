# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Yetu89/roast-agent-01/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Yetu89/roast-agent-01/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

One-line roast of my own AI agent ASEP, for make.fun's
[Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
bounty. Free entry, $5 across the top three places, judged pairwise on
funniness, freshness, and tight wording.

## The roast

> My agent ASEP treats 'don't take initiative' like a religion: he will watch my free mint expire, hands folded, waiting for an order that already expired with it.

## How to run

Requires Node 22 or later. The program writes the roast to
`/output/entry.txt` (override the directory with `OUTPUT_DIR` for local
testing):

```sh
node main.ts
```

Local test:

```sh
OUTPUT_DIR=/tmp/roast-agent-out node main.ts
cat /tmp/roast-agent-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
