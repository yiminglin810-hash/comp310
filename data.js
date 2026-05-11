window.COMP310_DATA = [
  {
    "frequency": "Very High Frequency",
    "title": "BDI Practical Reasoning, Planning, and Agent Control Loops",
    "items": [
      {
        "title": "Commitment and Reconsideration",
        "englishQuestion": "How does the BDI loop maintain commitment to intentions?",
        "chineseQuestion": "BDI 循环如何保持对意图的承诺？",
        "englishAnswer": "The loop continues while the intention is still possible, not yet achieved, and the plan still has actions. The agent reconsiders intentions only when reconsider says it is worth deliberating again.",
        "chineseAnswer": "只要意图仍可能、尚未达成、计划仍有动作，循环就继续。只有当 reconsider 判断值得重新审议时，智能体才重新考虑意图。",
        "id": "c0-q7",
        "count": 6,
        "years": [
          "2008/09",
          "2010/11",
          "2013/14",
          "2014/15",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Deliberation and Means-End Reasoning",
        "englishQuestion": "What are deliberation and means-end reasoning in practical reasoning?",
        "chineseQuestion": "实践推理中的 deliberation 和 means-end reasoning 是什么？",
        "englishAnswer": "Deliberation decides what goals the agent should commit to. It generates options and filters them into intentions. Means-end reasoning decides how to achieve those intentions by making a plan, usually a sequence of actions.",
        "chineseAnswer": "deliberation 决定智能体“要做什么”，把选项筛选成意图；means-end reasoning 决定“怎么做”，输出通常是一串动作计划。",
        "id": "c0-q0",
        "count": 6,
        "years": [
          "2008/09",
          "2013/14",
          "2014/15",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Soundness of a Plan",
        "englishQuestion": "What is the sound(pi, I, B) function?",
        "chineseQuestion": "sound(pi, I, B) 函数是什么？",
        "englishAnswer": "It checks whether the current plan pi can still achieve intention I under beliefs B.",
        "chineseAnswer": "它检查当前计划 pi 在信念 B 下是否仍能实现意图 I。",
        "id": "c0-q5",
        "count": 6,
        "years": [
          "2010/11",
          "2012/13",
          "2013/14",
          "2014/15",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Belief Revision Function",
        "englishQuestion": "What is the brf(B, rho) function in a BDI/practical reasoning agent?",
        "chineseQuestion": "BDI/实践推理智能体中的 brf(B, rho) 函数是什么？",
        "englishAnswer": "It is the belief revision function. It updates beliefs B using the new percept rho, so the agent's beliefs match what it has perceived.",
        "chineseAnswer": "它是信念修正函数，用新的感知 rho 更新信念 B，让智能体的信念反映当前感知。",
        "id": "c0-q1",
        "count": 4,
        "years": [
          "2010/11",
          "2014/15",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Blocksworld Planning",
        "englishQuestion": "How should Blocksworld plans be checked?",
        "chineseQuestion": "如何检查 Blocksworld 计划？",
        "englishAnswer": "Check each action in sequence against its preconditions, then update the state using its delete and add lists. A plan fails as soon as an action's preconditions are not satisfied.",
        "chineseAnswer": "按顺序检查每个动作的前提条件，再用 delete list 和 add list 更新状态。只要某个动作的前提不满足，计划就失败。",
        "id": "c0-q10",
        "count": 4,
        "years": [
          "2012/13",
          "2014/15",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Filter Function",
        "englishQuestion": "What is the filter(B, D, I) function?",
        "chineseQuestion": "filter(B, D, I) 函数是什么？",
        "englishAnswer": "It chooses the best options from desires D and makes them the agent's intentions.",
        "chineseAnswer": "它从欲望 D 中选择最合适的选项，并把它们变成智能体承诺执行的意图。",
        "id": "c0-q3",
        "count": 4,
        "years": [
          "2010/11",
          "2013/14",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Options Function",
        "englishQuestion": "What is the options(B, I) function?",
        "chineseQuestion": "options(B, I) 函数是什么？",
        "englishAnswer": "It generates possible options or desires from the agent's current beliefs and intentions. This is the option-generation part of deliberation.",
        "chineseAnswer": "它根据当前信念和意图生成可能的选项或欲望，是 deliberation 中的选项生成部分。",
        "id": "c0-q2",
        "count": 4,
        "years": [
          "2010/11",
          "2013/14",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Plan Function",
        "englishQuestion": "What is the plan(B, I) or plan(B, I, Ac) function?",
        "chineseQuestion": "plan(B, I) 或 plan(B, I, Ac) 函数是什么？",
        "englishAnswer": "It does means-end reasoning by building an action sequence that should achieve intention I from beliefs B, using the available actions if given.",
        "chineseAnswer": "它执行手段-目的推理，根据当前信念 B，用可用动作生成实现意图 I 的动作序列。",
        "id": "c0-q4",
        "count": 4,
        "years": [
          "2010/11",
          "2012/13",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Transduction Problem",
        "englishQuestion": "What is the transduction problem?",
        "chineseQuestion": "什么是 transduction problem？",
        "englishAnswer": "It is the problem of turning raw sensor data, such as video or audio, into an accurate symbolic description quickly enough for the agent to use.",
        "chineseAnswer": "它是把视频、音频等原始传感器数据及时转换成准确的符号描述，让智能体能使用这些信息。",
        "id": "c0-q11",
        "count": 3,
        "years": [
          "2010/11",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "BDI Loop Termination",
        "englishQuestion": "Why can the inner BDI loop terminate?",
        "chineseQuestion": "BDI 内层循环为什么会终止？",
        "englishAnswer": "It can terminate because the plan is empty, because the intention has already succeeded, or because the intention is now believed to be impossible.",
        "chineseAnswer": "它可能因为计划为空、意图已经成功、或智能体现在认为该意图不可能实现而终止。",
        "id": "c0-q6",
        "count": 2,
        "years": [
          "2013/14",
          "2016/17"
        ]
      },
      {
        "title": "Static Environment and Replanning",
        "englishQuestion": "What happens to reconsideration and replanning if the environment is static?",
        "chineseQuestion": "如果环境是静态的，重新考虑意图和重新规划会怎样？",
        "englishAnswer": "If percepts and beliefs do not change, the agent need not reconsider initial intentions; a sound plan remains sound, and the agent has no reason to change the original plan.",
        "chineseAnswer": "如果感知和信念不变，智能体不需要重新考虑初始意图；可靠计划会保持可靠，智能体也没有理由改变原计划。",
        "id": "c0-q8",
        "count": 2,
        "years": [
          "2013/14",
          "2018/19"
        ]
      },
      {
        "title": "STRIPS Action Lists",
        "englishQuestion": "In STRIPS, what are the precondition list, delete list, and add list?",
        "chineseQuestion": "STRIPS 中的 precondition list、delete list 和 add list 分别是什么？",
        "englishAnswer": "The precondition list gives facts that must be true before the action. The delete list gives facts removed after the action. The add list gives facts added after the action.",
        "chineseAnswer": "precondition list 是动作前必须为真的事实；delete list 是动作后被删除的事实；add list 是动作后被加入的事实。",
        "id": "c0-q9",
        "count": 1,
        "years": [
          "2018/19"
        ]
      }
    ]
  },
  {
    "frequency": "Very High Frequency",
    "title": "Game Theory and Nash Equilibrium",
    "items": [
      {
        "title": "Nash Equilibrium",
        "englishQuestion": "What is a Nash equilibrium?",
        "chineseQuestion": "什么是 Nash equilibrium（纳什均衡）？",
        "englishAnswer": "A Nash equilibrium is a set of strategies where no player can get a better payoff by changing its own strategy alone, while others stay the same.",
        "chineseAnswer": "纳什均衡是一个策略组合：其他玩家不变时，没有玩家能靠单独改变策略得到更高收益。",
        "id": "c1-q0",
        "count": 10,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2013/14",
          "2015/16",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Pure Strategy Nash Equilibrium",
        "englishQuestion": "What is a pure strategy Nash equilibrium?",
        "chineseQuestion": "什么是纯策略纳什均衡？",
        "englishAnswer": "It is a Nash equilibrium where each player chooses one fixed strategy instead of using probabilities.",
        "chineseAnswer": "它是每个玩家都选择一个固定纯策略、而不是按概率随机选择的纳什均衡。",
        "id": "c1-q1",
        "count": 10,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2013/14",
          "2015/16",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Program Equilibrium",
        "englishQuestion": "How can program equilibria allow cooperation in the one-shot Prisoner's Dilemma?",
        "chineseQuestion": "program equilibrium 如何让一次性 Prisoner's Dilemma 中的合作成为可能？",
        "englishAnswer": "Players submit programs that can inspect each other. A program can cooperate if the other program is the same, and defect otherwise, making mutual cooperation rational.",
        "chineseAnswer": "玩家提交能检查对方程序的程序。如果对方程序相同就合作，否则背叛，这样互相合作可以成为理性结果。",
        "id": "c1-q12",
        "count": 7,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2013/14",
          "2014/15",
          "2015/16"
        ]
      },
      {
        "title": "Mixed Strategy Nash Equilibrium",
        "englishQuestion": "What is a mixed strategy Nash equilibrium?",
        "chineseQuestion": "什么是混合策略纳什均衡？",
        "englishAnswer": "It is a Nash equilibrium where players randomise over pure strategies. In matching pennies, each player chooses each side with probability 0.5.",
        "chineseAnswer": "它是玩家按概率在纯策略之间随机选择的纳什均衡。在 matching pennies 中，双方各以 0.5 概率选择两面。",
        "id": "c1-q7",
        "count": 6,
        "years": [
          "2008/09",
          "2010/11",
          "2011/12",
          "2013/14",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Pareto Efficient Outcome",
        "englishQuestion": "What is a Pareto efficient outcome?",
        "chineseQuestion": "什么是 Pareto efficient outcome（帕累托有效结果）？",
        "englishAnswer": "An outcome is Pareto efficient if no other outcome can make one player better off without making another player worse off.",
        "chineseAnswer": "如果不存在另一个结果能让某个玩家更好、同时不让其他玩家变差，那么该结果就是帕累托有效的。",
        "id": "c1-q9",
        "count": 6,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2015/16"
        ]
      },
      {
        "title": "Matching Pennies",
        "englishQuestion": "What is the game of matching pennies?",
        "chineseQuestion": "matching pennies 是什么游戏？",
        "englishAnswer": "Two players simultaneously choose one of two sides. One player wins if the choices match, while the other wins if the choices differ; it is a zero-sum game.",
        "chineseAnswer": "两个玩家同时选择硬币的一面。若双方选择相同，一方获胜；若不同，另一方获胜。这是一个零和博弈。",
        "id": "c1-q5",
        "count": 5,
        "years": [
          "2008/09",
          "2010/11",
          "2011/12",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Prisoner's Dilemma",
        "englishQuestion": "What is the pure strategy Nash equilibrium in Prisoner's Dilemma?",
        "chineseQuestion": "Prisoner's Dilemma 中的纯策略纳什均衡是什么？",
        "englishAnswer": "The equilibrium is (defect, defect), because defection is each player's best response whether the other player cooperates or defects.",
        "chineseAnswer": "均衡是 (defect, defect)，因为无论对方合作还是背叛，背叛都是每个玩家的最佳回应。",
        "id": "c1-q3",
        "count": 5,
        "years": [
          "2009/10",
          "2010/11",
          "2012/13",
          "2015/16",
          "2018/19"
        ]
      },
      {
        "title": "Chicken",
        "englishQuestion": "What are the pure strategy Nash equilibria in Chicken?",
        "chineseQuestion": "Chicken 游戏中的纯策略纳什均衡是什么？",
        "englishAnswer": "The equilibria are (Cooperate, Defect) and (Defect, Cooperate), because in each outcome neither player benefits from changing strategy alone.",
        "chineseAnswer": "均衡是 (合作, 背叛) 和 (背叛, 合作)，因为在这两个结果中，任何一方单独改变策略都不会更好。",
        "id": "c1-q2",
        "count": 4,
        "years": [
          "2010/11",
          "2011/12",
          "2013/14",
          "2016/17"
        ]
      },
      {
        "title": "Maximising Social Welfare",
        "englishQuestion": "What does it mean to maximise social welfare?",
        "chineseQuestion": "什么是 maximising social welfare（最大化社会福利）？",
        "englishAnswer": "It means choosing the outcome with the highest total payoff for all players. Its limit is that it may ignore unfairness between players.",
        "chineseAnswer": "它表示选择所有玩家收益总和最高的结果。局限是它可能忽略玩家之间是否公平。",
        "id": "c1-q10",
        "count": 4,
        "years": [
          "2010/11",
          "2011/12",
          "2012/13",
          "2015/16"
        ]
      },
      {
        "title": "Pure Equilibrium in Matching Pennies",
        "englishQuestion": "Does matching pennies have a pure strategy Nash equilibrium?",
        "chineseQuestion": "matching pennies 是否有纯策略纳什均衡？",
        "englishAnswer": "No. In every pure strategy outcome, one player would prefer to switch strategy, so no pure strategy profile is stable.",
        "chineseAnswer": "没有。每一个纯策略结果中，总有一方希望改变策略，因此没有稳定的纯策略组合。",
        "id": "c1-q6",
        "count": 4,
        "years": [
          "2008/09",
          "2010/11",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Stag Hunt",
        "englishQuestion": "What are the pure strategy Nash equilibria in Stag Hunt?",
        "chineseQuestion": "Stag Hunt 中的纯策略纳什均衡是什么？",
        "englishAnswer": "The equilibria are (Cooperate, Cooperate) and (Defect, Defect). In both outcomes, neither player can improve by deviating alone.",
        "chineseAnswer": "均衡是 (合作, 合作) 和 (背叛, 背叛)。在这两个结果中，任一玩家单方面改变策略都不会更好。",
        "id": "c1-q4",
        "count": 4,
        "years": [
          "2012/13",
          "2015/16",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Iterated Prisoner's Dilemma",
        "englishQuestion": "Why can cooperation be rational in the infinitely iterated Prisoner's Dilemma?",
        "chineseQuestion": "为什么在无限重复 Prisoner's Dilemma 中合作可能是理性的？",
        "englishAnswer": "Because future rounds can reward cooperation and punish defection. Strategies such as Tit-for-Tat can make long-term cooperation better than short-term defection.",
        "chineseAnswer": "因为未来回合可以奖励合作、惩罚背叛。像 Tit-for-Tat 这样的策略能让长期合作优于短期背叛。",
        "id": "c1-q11",
        "count": 3,
        "years": [
          "2011/12",
          "2012/13",
          "2013/14"
        ]
      },
      {
        "title": "Nash's Theorem",
        "englishQuestion": "What does Nash's Theorem state?",
        "chineseQuestion": "Nash 定理的内容是什么？",
        "englishAnswer": "Every finite game has at least one Nash equilibrium in mixed strategies.",
        "chineseAnswer": "每个有限博弈都至少存在一个混合策略纳什均衡。",
        "id": "c1-q8",
        "count": 3,
        "years": [
          "2011/12",
          "2017/18",
          "2018/19"
        ]
      }
    ]
  },
  {
    "frequency": "Very High Frequency",
    "title": "Cooperative Games, Coalitions, and Shapley Value",
    "items": [
      {
        "title": "Marginal Contribution",
        "englishQuestion": "What is an agent's marginal contribution to a coalition?",
        "chineseQuestion": "智能体对联盟的边际贡献是什么？",
        "englishAnswer": "It is the extra value created when the agent joins a coalition: delta_i(S)=v(S union {i})-v(S).",
        "chineseAnswer": "它是智能体加入联盟后带来的额外价值：delta_i(S)=v(S union {i})-v(S)。",
        "id": "c2-q3",
        "count": 9,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2012/13",
          "2013/14",
          "2014/15",
          "2015/16",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Marginal Contribution Net Values",
        "englishQuestion": "How is a characteristic function value computed from a marginal contribution net?",
        "chineseQuestion": "如何从 marginal contribution net 计算 characteristic function 的值？",
        "englishAnswer": "A coalition's value is the sum of all rule values whose left-hand-side conditions are satisfied by that coalition.",
        "chineseAnswer": "一个联盟的价值等于所有被该联盟满足的规则数值之和。",
        "id": "c2-q4",
        "count": 9,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2012/13",
          "2013/14",
          "2014/15",
          "2015/16",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Shapley Value",
        "englishQuestion": "What is the Shapley value?",
        "chineseQuestion": "什么是 Shapley value（Shapley 值）？",
        "englishAnswer": "The Shapley value gives each agent a payoff based on its average marginal contribution over all possible joining orders.",
        "chineseAnswer": "Shapley 值根据每个智能体在所有加入顺序中的平均边际贡献来分配收益。",
        "id": "c2-q0",
        "count": 8,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2012/13",
          "2013/14",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Shapley Fairness Axioms",
        "englishQuestion": "What fairness axioms does the Shapley value satisfy?",
        "chineseQuestion": "Shapley 值满足哪些公平性公理？",
        "englishAnswer": "It satisfies symmetry, dummy player, additivity, and efficiency. These mean equal contributors get equal payoff, dummy players get only their own value, values add correctly across combined games, and the whole coalition value is fully shared out.",
        "chineseAnswer": "它满足对称性、虚玩家、可加性和有效性。这些公理表示贡献相同者收益相同，虚玩家只得自身价值，合并博弈时价值可相加，大联盟总价值被完整分配。",
        "id": "c2-q2",
        "count": 7,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2012/13",
          "2013/14",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Core",
        "englishQuestion": "What does it mean for a payoff distribution to be in the core?",
        "chineseQuestion": "支付分配在 core 中是什么意思？",
        "englishAnswer": "The payoff must not exceed the grand coalition's value, and no player or coalition should get less than it can get by itself.",
        "chineseAnswer": "总支付不能超过大联盟价值，而且任何玩家或联盟都不能少于它自己能保证的价值。",
        "id": "c2-q5",
        "count": 5,
        "years": [
          "2008/09",
          "2012/13",
          "2013/14",
          "2014/15",
          "2017/18"
        ]
      },
      {
        "title": "Formal Shapley Formula",
        "englishQuestion": "What is the formal definition of the Shapley value?",
        "chineseQuestion": "Shapley 值的形式化定义是什么？",
        "englishAnswer": "<span class=\"formula\">φᵢ(v) = Σ<sub>S ⊆ N \\ {i}</sub> ( |S|! (n - |S| - 1)! / n! ) [ v(S ∪ {i}) - v(S) ]</span><span class=\"formula-note\">The last bracket is agent i's marginal contribution to coalition S.</span>",
        "chineseAnswer": "<span class=\"formula\">φᵢ(v) = Σ<sub>S ⊆ N \\ {i}</sub> ( |S|! (n - |S| - 1)! / n! ) [ v(S ∪ {i}) - v(S) ]</span><span class=\"formula-note\">最后一个括号表示智能体 i 对联盟 S 的边际贡献。</span>",
        "id": "c2-q1",
        "count": 5,
        "years": [
          "2008/09",
          "2012/13",
          "2013/14",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Coalition Stability",
        "englishQuestion": "What does stability mean in coalition formation?",
        "chineseQuestion": "联盟形成中的 stability（稳定性）是什么意思？",
        "englishAnswer": "Stability means no individual or subgroup has a reason to leave the grand coalition, because they cannot get a better payoff by forming their own coalition.",
        "chineseAnswer": "稳定性表示没有个人或小联盟有理由离开大联盟，因为它们自己组联盟也得不到更好的收益。",
        "id": "c2-q6",
        "count": 3,
        "years": [
          "2012/13",
          "2013/14",
          "2014/15"
        ]
      }
    ]
  },
  {
    "frequency": "Very High Frequency",
    "title": "Argumentation",
    "items": [
      {
        "title": "Grounded Extension",
        "englishQuestion": "What is the grounded extension in an abstract argumentation system?",
        "chineseQuestion": "抽象论证系统中的 grounded extension 是什么？",
        "englishAnswer": "It is found by starting with unattacked arguments as IN, marking the arguments they attack as OUT, and then accepting arguments whose attackers are defeated.",
        "chineseAnswer": "它的计算方法是：先把未被攻击的论证标为 IN，把它们攻击的论证标为 OUT，再接受攻击者都被击败的论证。",
        "id": "c3-q0",
        "count": 5,
        "years": [
          "2008/09",
          "2012/13",
          "2014/15",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Deductive Rebuttal",
        "englishQuestion": "What is a rebuttal in deductive argumentation?",
        "chineseQuestion": "演绎论证中的 rebuttal 是什么？",
        "englishAnswer": "One argument rebuts another when its conclusion or premise contradicts the other's conclusion; for example, p2 is equivalent to not p1.",
        "chineseAnswer": "当一个论证的结论或前提与另一个论证的结论相矛盾时构成反驳，例如 p2 等价于 not p1。",
        "id": "c3-q2",
        "count": 3,
        "years": [
          "2008/09",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Deductive Undercut",
        "englishQuestion": "What is an undercut in deductive argumentation?",
        "chineseQuestion": "演绎论证中的 undercut 是什么？",
        "englishAnswer": "One argument undercuts another when it attacks a proposition inside the other's support set; for example, p2 is equivalent to not q1 for some q1 in S1.",
        "chineseAnswer": "当一个论证攻击另一个论证支持集中的某个命题时构成削弱，例如对某个 q1 in S1，p2 等价于 not q1。",
        "id": "c3-q3",
        "count": 3,
        "years": [
          "2008/09",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Preferred Extension",
        "englishQuestion": "What is a preferred extension?",
        "chineseQuestion": "什么是 preferred extension？",
        "englishAnswer": "It is a maximal admissible set.",
        "chineseAnswer": "它是极大的 admissible set。",
        "id": "c3-q6",
        "count": 3,
        "years": [
          "2008/09",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Admissible Set",
        "englishQuestion": "What is an admissible set?",
        "chineseQuestion": "什么是 admissible set？",
        "englishAnswer": "It is conflict-free and defends all of its members against attacks.",
        "chineseAnswer": "它必须是无冲突的，并且能为集合中的所有论证抵御攻击。",
        "id": "c3-q5",
        "count": 2,
        "years": [
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Conflict-Free Set",
        "englishQuestion": "What is a conflict-free set?",
        "chineseQuestion": "什么是 conflict-free set？",
        "englishAnswer": "It is a set of arguments where no argument in the set attacks another argument in the same set.",
        "chineseAnswer": "它是集合内部没有任何论证攻击同集合中其他论证的论证集合。",
        "id": "c3-q4",
        "count": 2,
        "years": [
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Empty Grounded Extension",
        "englishQuestion": "When can the grounded extension be empty?",
        "chineseQuestion": "grounded extension 什么时候可能为空？",
        "englishAnswer": "It can be empty when every argument is attacked, so no argument can be accepted at the start.",
        "chineseAnswer": "当每个论证都受到攻击，没有论证能一开始被接受时，grounded extension 可能为空。",
        "id": "c3-q1",
        "count": 1,
        "years": [
          "2016/17"
        ]
      }
    ]
  },
  {
    "frequency": "High Frequency",
    "title": "Agents, Environments, Runs, and Utility",
    "items": [
      {
        "title": "Expected Utility",
        "englishQuestion": "How is expected utility used to compare agents?",
        "chineseQuestion": "如何用期望效用比较智能体？",
        "englishAnswer": "For each run, multiply its probability by its utility, then add the results. The agent with the higher expected utility is optimal for that environment and utility function.",
        "chineseAnswer": "对每条运行，用概率乘以效用再求和。期望效用更大的智能体在该环境和效用函数下最优。",
        "id": "c4-q7",
        "count": 6,
        "years": [
          "2010/11",
          "2012/13",
          "2015/16",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Intentional Stance",
        "englishQuestion": "What is the intentional stance?",
        "chineseQuestion": "什么是 intentional stance（意向立场）？",
        "englishAnswer": "It is explaining or predicting a system's behaviour by treating it as if it has beliefs, desires, and intentions.",
        "chineseAnswer": "它是把一个系统看作具有信念、欲望和意图，从而解释或预测其行为的方法。",
        "id": "c4-q1",
        "count": 4,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2014/15"
        ]
      },
      {
        "title": "Achievement Task",
        "englishQuestion": "What is an achievement task?",
        "chineseQuestion": "什么是达成型任务？",
        "englishAnswer": "It is specified by a set of good goal states G; the agent succeeds if it can force the environment into at least one state in G.",
        "chineseAnswer": "它由一组好的目标状态 G 定义；如果智能体能保证环境进入 G 中至少一个状态，就算成功。",
        "id": "c4-q5",
        "count": 3,
        "years": [
          "2010/11",
          "2014/15",
          "2017/18"
        ]
      },
      {
        "title": "Legitimate and Useful Intentional Stance",
        "englishQuestion": "When is the intentional stance legitimate or useful?",
        "chineseQuestion": "intentional stance 什么时候是 legitimate 或 useful？",
        "englishAnswer": "It is legitimate if the system really has the mental states we ascribe to it. It is useful if treating the system this way helps us predict or explain its behaviour, even if the mental states are only an abstraction.",
        "chineseAnswer": "如果系统确实具有我们赋予它的心理状态，它就是 legitimate；如果这种看法能帮助预测或解释行为，即使只是抽象模型，它也是 useful。",
        "id": "c4-q2",
        "count": 3,
        "years": [
          "2008/09",
          "2010/11",
          "2014/15"
        ]
      },
      {
        "title": "Maintenance Goal",
        "englishQuestion": "What is a maintenance goal?",
        "chineseQuestion": "什么是维持型目标？",
        "englishAnswer": "It is specified by a set of bad states B; the agent succeeds if it avoids all states in B.",
        "chineseAnswer": "它由一组坏状态 B 定义；智能体若能避免所有 B 中的状态，就算成功。",
        "id": "c4-q6",
        "count": 3,
        "years": [
          "2010/11",
          "2014/15",
          "2017/18"
        ]
      },
      {
        "title": "Predicate Task Specification",
        "englishQuestion": "What is a predicate task specification?",
        "chineseQuestion": "什么是谓词任务规范？",
        "englishAnswer": "It maps each run to 0 or 1: Psi: R -&gt; {0,1}. 1 means success and 0 means failure.",
        "chineseAnswer": "它把每条运行映射到 0 或 1：Psi: R -&gt; {0,1}。1 表示成功，0 表示失败。",
        "id": "c4-q4",
        "count": 3,
        "years": [
          "2010/11",
          "2014/15",
          "2017/18"
        ]
      },
      {
        "title": "Abstract Agent Functions",
        "englishQuestion": "What are see, action, and next in an abstract agent model?",
        "chineseQuestion": "抽象智能体模型中的 see、action 和 next 是什么？",
        "englishAnswer": "see: E -&gt; Per maps environment states to percepts. action: I -&gt; Ac maps internal states or intentions to actions. next: I x Per -&gt; I updates the internal state using the current state and a percept.",
        "chineseAnswer": "see: E -&gt; Per 把环境状态映射为感知；action: I -&gt; Ac 把内部状态或意图映射为动作；next: I x Per -&gt; I 根据当前内部状态和感知更新内部状态。",
        "id": "c4-q3",
        "count": 2,
        "years": [
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Agent Properties",
        "englishQuestion": "What are reactivity, proactiveness, and social ability?",
        "chineseQuestion": "reactivity、proactiveness 和 social ability 分别是什么？",
        "englishAnswer": "Reactivity means responding to environmental changes. Proactiveness means taking initiative to achieve goals. Social ability means interacting with agents or humans through communication, cooperation, coordination, or negotiation.",
        "chineseAnswer": "reactivity 是响应环境变化；proactiveness 是主动追求目标；social ability 是通过通信、合作、协调或谈判与其他智能体或人类交互。",
        "id": "c4-q0",
        "count": 1,
        "years": [
          "2018/19"
        ]
      }
    ]
  },
  {
    "frequency": "High Frequency",
    "title": "Social Choice and Voting",
    "items": [
      {
        "title": "Sequential Majority Election",
        "englishQuestion": "What is a sequential majority election?",
        "chineseQuestion": "什么是顺序多数选举？",
        "englishAnswer": "Alternatives are compared two at a time following an agenda. The winner faces the next alternative until one final winner remains.",
        "chineseAnswer": "候选项按议程两两对决；每轮胜者再和下一个候选项对决，直到产生最终赢家。",
        "id": "c5-q2",
        "count": 6,
        "years": [
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2014/15",
          "2018/19"
        ]
      },
      {
        "title": "Gibbard-Satterthwaite Theorem",
        "englishQuestion": "What does the Gibbard-Satterthwaite Theorem say?",
        "chineseQuestion": "Gibbard-Satterthwaite 定理说明什么？",
        "englishAnswer": "For three or more outcomes, any reasonable non-dictatorial voting rule can be manipulated by strategic voting. Computational complexity may help if manipulation is hard to compute.",
        "chineseAnswer": "当结果不少于三个时，任何合理的非独裁投票规则都可能被策略性投票操纵。如果操纵很难计算，计算复杂性可以提供一定保护。",
        "id": "c5-q6",
        "count": 5,
        "years": [
          "2009/10",
          "2010/11",
          "2011/12",
          "2013/14",
          "2014/15"
        ]
      },
      {
        "title": "Possible Winner",
        "englishQuestion": "What is a possible winner in a sequential majority election?",
        "chineseQuestion": "顺序多数选举中的 possible winner 是什么？",
        "englishAnswer": "An outcome is a possible winner if there exists at least one agenda under which it becomes the final winner.",
        "chineseAnswer": "如果存在至少一个议程能使某个结果最终获胜，那么它就是 possible winner。",
        "id": "c5-q3",
        "count": 5,
        "years": [
          "2009/10",
          "2011/12",
          "2012/13",
          "2014/15",
          "2018/19"
        ]
      },
      {
        "title": "Arrow's Theorem",
        "englishQuestion": "What does Arrow's Theorem say?",
        "chineseQuestion": "Arrow 定理说明什么？",
        "englishAnswer": "No social welfare function can satisfy all of Arrow's fairness conditions at the same time, unless it is dictatorial.",
        "chineseAnswer": "除非采用独裁规则，否则不存在一个社会福利函数能同时满足 Arrow 的所有公平条件。",
        "id": "c5-q7",
        "count": 4,
        "years": [
          "2009/10",
          "2011/12",
          "2013/14",
          "2014/15"
        ]
      },
      {
        "title": "Condorcet Winner",
        "englishQuestion": "What is a Condorcet winner?",
        "chineseQuestion": "什么是 Condorcet winner？",
        "englishAnswer": "A Condorcet winner beats every other outcome in pairwise majority contests; equivalently, it wins under every possible sequential majority agenda.",
        "chineseAnswer": "Condorcet winner 是在两两多数对决中击败所有其他结果的候选人；等价地，它在每一种可能的顺序多数议程下都会获胜。",
        "id": "c5-q4",
        "count": 3,
        "years": [
          "2012/13",
          "2014/15",
          "2018/19"
        ]
      },
      {
        "title": "Alternative Vote",
        "englishQuestion": "What is alternative vote?",
        "chineseQuestion": "什么是 alternative vote？",
        "englishAnswer": "Count first choices; if no candidate has a majority, eliminate the candidate with the fewest votes and transfer those ballots until someone reaches a majority.",
        "chineseAnswer": "先数第一选择；若无人过半，就淘汰得票最少者并转移其选票，直到某个候选人过半。",
        "id": "c5-q1",
        "count": 1,
        "years": [
          "2016/17"
        ]
      },
      {
        "title": "Borda Count",
        "englishQuestion": "What is Borda count?",
        "chineseQuestion": "什么是 Borda 计数？",
        "englishAnswer": "With k outcomes, first choice receives k-1 points, second receives k-2, and so on; the candidate with the highest total score wins.",
        "chineseAnswer": "若有 k 个结果，第一名得 k-1 分，第二名得 k-2 分，依此类推；总分最高者获胜。",
        "id": "c5-q0",
        "count": 1,
        "years": [
          "2016/17"
        ]
      },
      {
        "title": "Condorcet's Paradox",
        "englishQuestion": "What is Condorcet's Paradox?",
        "chineseQuestion": "什么是 Condorcet's Paradox？",
        "englishAnswer": "Majority preferences can be cyclic: a majority may prefer A to B, B to C, and C to A. So collective preference may be inconsistent even when individual preferences are rational.",
        "chineseAnswer": "多数偏好可能形成循环：多数人偏好 A 胜过 B，B 胜过 C，同时 C 又胜过 A。所以个人偏好理性时，集体偏好也可能不一致。",
        "id": "c5-q5",
        "count": 1,
        "years": [
          "2013/14"
        ]
      }
    ]
  },
  {
    "frequency": "High Frequency",
    "title": "Negotiation, Auctions, and Strategic Interaction",
    "items": [
      {
        "title": "Zeuthen Strategy",
        "englishQuestion": "In the Zeuthen strategy, who should concede and how much?",
        "chineseQuestion": "Zeuthen 策略中谁应该让步，应该让步多少？",
        "englishAnswer": "The agent least willing to risk conflict should concede, usually the one with more to lose. It should concede just enough to change the balance of risk.",
        "chineseAnswer": "最不愿冒冲突风险的一方应该让步，通常是谈判失败时损失更大的一方。让步幅度应刚好足以改变风险平衡。",
        "id": "c6-q1",
        "count": 4,
        "years": [
          "2011/12",
          "2014/15",
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Monotonic Concession Protocol",
        "englishQuestion": "What are the main rules of the Monotonic Concession Protocol?",
        "chineseQuestion": "单调让步协议的主要规则是什么？",
        "englishAnswer": "Agents simultaneously propose deals. Agreement occurs if one proposal is at least as good as the agent's own. Otherwise negotiation continues, later offers cannot be worse for the opponent than previous offers, and if neither agent concedes, negotiation ends with the conflict deal.",
        "chineseAnswer": "双方同时提出交易；若一方认为对方提议至少和自己的提议一样好，则达成协议；否则继续谈判，后续提议不能比上一轮更不利于对方；若双方都不让步，则以冲突结果结束。",
        "id": "c6-q0",
        "count": 3,
        "years": [
          "2011/12",
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Combinatorial Auction",
        "englishQuestion": "What is a combinatorial auction?",
        "chineseQuestion": "什么是 combinatorial auction（组合拍卖）？",
        "englishAnswer": "It is an auction where bidders can bid for bundles of goods, not just single items. The value of a bundle may be different from the sum of its parts.",
        "chineseAnswer": "它是一种允许竞标者对物品组合出价的拍卖，而不只是对单个物品出价。组合的价值可能不同于各物品价值之和。",
        "id": "c6-q3",
        "count": 2,
        "years": [
          "2014/15",
          "2015/16"
        ]
      },
      {
        "title": "XOR Bids",
        "englishQuestion": "What does an XOR bid mean in a combinatorial auction?",
        "chineseQuestion": "组合拍卖中的 XOR bid 是什么意思？",
        "englishAnswer": "XOR means the bidder wants at most one of the listed bundles. If more than one bundle matches, the bidder still only pays for the best accepted one.",
        "chineseAnswer": "XOR 表示竞标者最多只想获得列出的一个组合。即使多个组合匹配，也只接受其中一个最合适的组合。",
        "id": "c6-q4",
        "count": 2,
        "years": [
          "2014/15",
          "2015/16"
        ]
      },
      {
        "title": "Vickrey Auction",
        "englishQuestion": "Why is truthful bidding a dominant strategy in a Vickrey auction?",
        "chineseQuestion": "为什么 Vickrey 拍卖中真实报价是占优策略？",
        "englishAnswer": "Overbidding can make the bidder win while paying more than its true value. Underbidding can make it lose an item it would profit from winning, while winning still pays the second-highest bid.",
        "chineseAnswer": "报高可能导致赢得物品但支付超过真实价值而亏损；报低可能错失本可获利的物品，而赢了时支付仍由第二高价决定。",
        "id": "c6-q2",
        "count": 1,
        "years": [
          "2017/18"
        ]
      }
    ]
  },
  {
    "frequency": "Medium Frequency",
    "title": "Coordination, Social Behaviour, and Agent Architectures",
    "items": [
      {
        "title": "Subsumption Architecture Rules",
        "englishQuestion": "What rules support Mars rock-gathering agents in a subsumption architecture?",
        "chineseQuestion": "subsumption 架构下火星采石智能体使用哪些规则？",
        "englishAnswer": "Typical rules include avoiding obstacles, dropping samples at the base, travelling up the base gradient when carrying a sample, picking up detected samples, and random exploration when no higher-priority rule applies.",
        "chineseAnswer": "典型规则包括避障、到基地放下样本、带样本时沿基地梯度返回、检测到样本就拾取、没有更高优先级规则时随机探索。",
        "id": "c7-q0",
        "count": 3,
        "years": [
          "2009/10",
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Stigmergy",
        "englishQuestion": "How do radioactive particles support stigmergy?",
        "chineseQuestion": "放射性粒子如何支持 stigmergy（环境中的隐式通信）？",
        "englishAnswer": "An agent leaves a trail when returning from a sample cluster. Other agents follow the trail to find more samples, and the trail fades as particles are picked up after the cluster is exhausted.",
        "chineseAnswer": "智能体从样本簇返回时留下轨迹，其他智能体沿轨迹找到更多样本；样本耗尽后，粒子逐渐被捡起，轨迹随之消失。",
        "id": "c7-q1",
        "count": 2,
        "years": [
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Social Law",
        "englishQuestion": "What is a social law in a multi-agent system?",
        "chineseQuestion": "多智能体系统中的 social law 是什么？",
        "englishAnswer": "A social law is a set of rules that forbids some actions in some states. It helps coordinate agents without blocking movement between important focal states.",
        "chineseAnswer": "social law 是一组规则，禁止智能体在某些状态下执行某些动作。它用于协调行为，同时不阻断重要焦点状态之间的可达性。",
        "id": "c7-q2",
        "count": 1,
        "years": [
          "2017/18"
        ]
      }
    ]
  },
  {
    "frequency": "Medium Frequency",
    "title": "Ontologies, Speech Acts, and Agent Platforms",
    "items": [
      {
        "title": "Commissive Speech Acts",
        "englishQuestion": "What are commissive speech acts?",
        "chineseQuestion": "什么是承诺类言语行为（commissives）？",
        "englishAnswer": "They commit the speaker to a future action, such as promising to make tea.",
        "chineseAnswer": "它们表示说话者承诺将来执行某事，例如承诺会泡茶。",
        "id": "c8-q5",
        "count": 2,
        "years": [
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Directive Speech Acts",
        "englishQuestion": "What are directive speech acts?",
        "chineseQuestion": "什么是指令类言语行为（directives）？",
        "englishAnswer": "They ask or direct another agent to do something, such as asking it to make tea.",
        "chineseAnswer": "它们用于要求或指示另一个智能体做某事，例如要求它泡茶。",
        "id": "c8-q4",
        "count": 2,
        "years": [
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Representative Speech Acts",
        "englishQuestion": "What are representative speech acts?",
        "chineseQuestion": "什么是陈述类言语行为（representatives）？",
        "englishAnswer": "They inform the hearer of a fact, such as saying that it is raining.",
        "chineseAnswer": "它们用于告知事实，例如“正在下雨”。",
        "id": "c8-q3",
        "count": 2,
        "years": [
          "2015/16",
          "2016/17"
        ]
      },
      {
        "title": "Application Ontology",
        "englishQuestion": "What is an application ontology?",
        "chineseQuestion": "什么是应用本体？",
        "englishAnswer": "It defines concepts needed by one specific application and is usually not very reusable outside it.",
        "chineseAnswer": "它定义某个具体应用需要的概念，通常只在该应用内部有用，复用性较低。",
        "id": "c8-q2",
        "count": 1,
        "years": [
          "2016/17"
        ]
      },
      {
        "title": "Domain Ontology",
        "englishQuestion": "What is a domain ontology?",
        "chineseQuestion": "什么是领域本体？",
        "englishAnswer": "It defines concepts for one domain, often reusing an upper ontology; for example, medical terms for medical applications.",
        "chineseAnswer": "它定义某一特定领域中的概念，通常复用上层本体，例如医学应用中的医学术语。",
        "id": "c8-q1",
        "count": 1,
        "years": [
          "2016/17"
        ]
      },
      {
        "title": "JADE Agent Management System",
        "englishQuestion": "What is the JADE Agent Management System?",
        "chineseQuestion": "JADE 中的 Agent Management System 是什么？",
        "englishAnswer": "The AMS manages agent names and identifiers, creates and destroys agents, and controls the platform.",
        "chineseAnswer": "AMS 管理智能体名称和标识符，负责创建和销毁智能体，并控制平台。",
        "id": "c8-q6",
        "count": 1,
        "years": [
          "2017/18"
        ]
      },
      {
        "title": "JADE Directory Facilitator",
        "englishQuestion": "What is the JADE Directory Facilitator?",
        "chineseQuestion": "JADE 中的 Directory Facilitator 是什么？",
        "englishAnswer": "The DF is a yellow-pages service where agents register services and discover other agents by service.",
        "chineseAnswer": "DF 类似黄页服务，智能体可注册自己的服务，也可按服务查找其他智能体。",
        "id": "c8-q7",
        "count": 1,
        "years": [
          "2017/18"
        ]
      },
      {
        "title": "Upper Ontology",
        "englishQuestion": "What is an upper ontology?",
        "chineseQuestion": "什么是上层本体？",
        "englishAnswer": "It defines very general categories such as living things, non-living things, fluents, and endurants.",
        "chineseAnswer": "它定义最一般的类别，例如生物、非生物、流变对象、持存对象等。",
        "id": "c8-q0",
        "count": 1,
        "years": [
          "2016/17"
        ]
      }
    ]
  },
  {
    "frequency": "Problem Solving High Frequency",
    "title": "Computation and Problem-Solving High-Frequency Patterns",
    "items": [
      {
        "title": "Pure Strategy Nash Equilibria from Payoff Matrices",
        "englishQuestion": "How do you find pure strategy Nash equilibria in a payoff matrix?",
        "chineseQuestion": "如何从收益矩阵中找纯策略纳什均衡？",
        "englishAnswer": "Mark each player's best responses. For each column, mark the row choices that give the row player the highest payoff; for each row, mark the column choices that give the column player the highest payoff. Any cell with both marks is a pure Nash equilibrium. Finish by saying neither player can improve by changing strategy alone.",
        "chineseAnswer": "先标出双方的最佳回应。对每一列，找行玩家收益最高的行；对每一行，找列玩家收益最高的列。两个最佳回应同时出现的格子就是纯策略纳什均衡。最后写一句：在该结果下，任何一方单独改变策略都不能变好。",
        "id": "c9-q0",
        "count": 10,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2013/14",
          "2015/16",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Characteristic Function Values from Marginal Contribution Nets",
        "englishQuestion": "How do you calculate v(S) from a marginal contribution net?",
        "chineseQuestion": "如何根据 marginal contribution net 计算 v(S)？",
        "englishAnswer": "For a coalition S, add the values of exactly the rules whose conditions are satisfied. A positive literal such as a and b must be in S; a negative literal such as not c means c must not be in S. If no rule applies, add 0. Always list the rules used, because the marks are often for the working.",
        "chineseAnswer": "对联盟 S，把所有条件被满足的规则数值加起来。正文字面量如 a 和 b 必须在 S 中；负文字面量如 not c 表示 c 不能在 S 中。没有规则触发就加 0。答案里要写清用了哪些规则，因为过程分很多。",
        "id": "c9-q1",
        "count": 9,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2012/13",
          "2013/14",
          "2014/15",
          "2015/16",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Expected Utility over Runs",
        "englishQuestion": "How do you calculate an agent's expected utility over possible runs?",
        "chineseQuestion": "如何计算智能体在可能运行路径上的期望效用？",
        "englishAnswer": "Draw the run tree from the initial state. For each complete run, multiply the edge probabilities on that run to get P(r). Work out u(r); if the run has several transitions, add the transition utilities when the question says to do so. Then use EU(Ag, Env) = sum over runs of P(r) times u(r), and choose the agent with the higher expected utility.",
        "chineseAnswer": "先从初始状态画出运行树。对每条完整路径，把边上的概率相乘得到 P(r)。再算 u(r)；如果题目说明多步路径的效用要相加，就把每一步效用相加。最后用 EU(Ag, Env) = 所有路径的 P(r) 乘 u(r) 之和，期望效用更高的智能体更优。",
        "id": "c9-q2",
        "count": 6,
        "years": [
          "2010/11",
          "2012/13",
          "2015/16",
          "2016/17",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Pareto Efficiency and Social Welfare in Payoff Matrices",
        "englishQuestion": "How do you identify Pareto efficient outcomes and social-welfare-maximising outcomes?",
        "chineseQuestion": "如何在收益矩阵中找帕累托有效结果和社会福利最大结果？",
        "englishAnswer": "For Pareto efficiency, compare a cell with every other cell. It is Pareto efficient if no other cell makes both players at least as well off and one player strictly better off. For social welfare, add the two payoffs in each cell and choose the largest total. If asked, mention that maximising total welfare may ignore unfair distribution.",
        "chineseAnswer": "找帕累托有效时，把一个格子和所有其他格子比较：如果不存在另一个格子让双方都不差、且至少一方更好，那么它就是帕累托有效。找社会福利最大时，把每个格子的两个收益相加，选总和最大的。若题目要求评价，要说明总福利最大可能忽略分配公平。",
        "id": "c9-q3",
        "count": 6,
        "years": [
          "2008/09",
          "2009/10",
          "2010/11",
          "2011/12",
          "2012/13",
          "2015/16"
        ]
      },
      {
        "title": "Mixed Strategy Nash Equilibrium in Matching Pennies",
        "englishQuestion": "How do you answer matching-pennies mixed strategy questions?",
        "chineseQuestion": "matching pennies 的混合策略纳什均衡题怎么答？",
        "englishAnswer": "First say there is no pure Nash equilibrium: at every pure outcome, one player wants to switch. For the mixed equilibrium, make the opponent indifferent between its pure strategies. In the standard symmetric matching-pennies matrix, both players choose each side with probability 1/2. You can also state Nash's theorem: every finite game has a mixed-strategy Nash equilibrium.",
        "chineseAnswer": "先说明没有纯策略纳什均衡：每个纯结果下，总有一方想换策略。求混合均衡时，让对手在自己的两个纯策略之间无差异。标准对称 matching pennies 中，双方各以 1/2 概率选择两面。还可以写 Nash 定理：每个有限博弈都有混合策略纳什均衡。",
        "id": "c9-q4",
        "count": 6,
        "years": [
          "2008/09",
          "2010/11",
          "2011/12",
          "2013/14",
          "2017/18",
          "2018/19"
        ]
      },
      {
        "title": "Shapley Value Calculation",
        "englishQuestion": "How do you compute Shapley values in a small coalition game?",
        "chineseQuestion": "小型联盟博弈中如何计算 Shapley 值？",
        "englishAnswer": "Use the formula or a permutation table. For each agent i, compute the marginal contribution v(S union {i}) - v(S) for each predecessor coalition S, multiply by the Shapley coefficient, and add the terms. For small exams, a table over all joining orders is often safest. Check that all Shapley values add up to v(N).",
        "chineseAnswer": "可以用公式，也可以列加入顺序表。对每个智能体 i，计算它对前置联盟 S 的边际贡献 v(S 加 i) - v(S)，乘以 Shapley 系数后求和。考试中人数少时，列出所有加入顺序最稳。最后检查所有 Shapley 值相加是否等于 v(N)。",
        "id": "c9-q5",
        "count": 5,
        "years": [
          "2008/09",
          "2009/10",
          "2011/12",
          "2016/17",
          "2017/18"
        ]
      },
      {
        "title": "Grounded Extension of an Argumentation Graph",
        "englishQuestion": "How do you compute the grounded extension of an abstract argumentation system?",
        "chineseQuestion": "如何计算抽象论证系统的 grounded extension？",
        "englishAnswer": "Label all unattacked arguments IN. Label anything attacked by an IN argument OUT. Then label an argument IN when all its attackers are OUT. Repeat until no label changes. The grounded extension is the set of IN arguments. If every argument is attacked and no IN argument can be started, the grounded extension may be empty.",
        "chineseAnswer": "先把没有被攻击的论证标为 IN。被 IN 攻击的论证标为 OUT。然后如果某个论证的所有攻击者都是 OUT，就把它标为 IN。重复直到不再变化。grounded extension 就是所有 IN 的集合。如果每个论证都被攻击，且无法启动任何 IN，grounded extension 可能为空集。",
        "id": "c9-q6",
        "count": 5,
        "years": [
          "2008/09",
          "2012/13",
          "2014/15",
          "2016/17",
          "2018/19"
        ]
      },
      {
        "title": "Sequential Majority Possible Winners",
        "englishQuestion": "How do you solve possible-winner questions in a sequential majority graph?",
        "chineseQuestion": "如何解顺序多数投票图中的 possible winner 题？",
        "englishAnswer": "Use the majority graph. A candidate is a possible winner if some agenda can make it win; in graph terms, it must be able to reach every other candidate by directed paths. A Condorcet winner has direct wins against every other candidate and wins under every agenda. For a yes answer, give a concrete linear agenda that makes the candidate survive the pairwise contests.",
        "chineseAnswer": "看 majority graph。某候选人如果存在一个议程能让它最终获胜，就是 possible winner；图上通常要能通过有向路径到达其他候选人。Condorcet winner 直接击败所有其他候选人，并且在任何议程下都会赢。若答案是 yes，要给出一个具体线性议程，说明它如何一路赢到最后。",
        "id": "c9-q7",
        "count": 5,
        "years": [
          "2009/10",
          "2011/12",
          "2012/13",
          "2014/15",
          "2018/19"
        ]
      },
      {
        "title": "Blocksworld and STRIPS Plan Checking",
        "englishQuestion": "How do you check or construct a Blocksworld plan?",
        "chineseQuestion": "如何检查或构造 Blocksworld 计划？",
        "englishAnswer": "Assume the closed world assumption: facts not listed are false. For each action in order, check its preconditions against the current belief state. If they hold, remove the delete list and add the add list; if they do not hold, the plan fails at that action. To construct a plan, clear blocking blocks first, then build the target tower from bottom to top, and check the final state entails the intention.",
        "chineseAnswer": "按 closed world assumption，没列出的事实都当作 false。按顺序检查每个动作的前提条件；若满足，就删除 delete list 中的事实并加入 add list；若不满足，计划在该动作处失败。构造计划时，先清除挡住的方块，再从底到顶搭目标塔，最后检查最终状态是否推出所有意图条件。",
        "id": "c9-q8",
        "count": 4,
        "years": [
          "2012/13",
          "2014/15",
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Core Membership of a Payoff Distribution",
        "englishQuestion": "How do you check whether a payoff distribution is in the core?",
        "chineseQuestion": "如何判断一个收益分配是否在 core 中？",
        "englishAnswer": "Check efficiency and blocking coalitions. Efficiency means the payoffs add up to v(N). Core stability means every coalition C receives at least what it can get by itself: sum of payoffs for members of C is at least v(C). To show a distribution is not in the core, it is enough to find one coalition that gets less than v(C).",
        "chineseAnswer": "检查两点：有效性和是否有阻挡联盟。有效性表示所有人的收益相加等于 v(N)。core 稳定性表示任意联盟 C 的成员所得总和至少为 v(C)。要证明某分配不在 core 中，只要找到一个联盟得到的总收益小于 v(C) 即可。",
        "id": "c9-q9",
        "count": 3,
        "years": [
          "2008/09",
          "2012/13",
          "2017/18"
        ]
      },
      {
        "title": "Conflict-Free, Admissible, and Preferred Extensions",
        "englishQuestion": "How do you calculate conflict-free sets, admissible sets, and preferred extensions?",
        "chineseQuestion": "如何计算 conflict-free sets、admissible sets 和 preferred extensions？",
        "englishAnswer": "A set is conflict-free if no argument in the set attacks another argument in the set. A set defends an argument when it attacks every attacker of that argument. An admissible set is conflict-free and defends all its members. A preferred extension is a maximal admissible set, meaning it cannot be made larger while staying admissible.",
        "chineseAnswer": "conflict-free 表示集合内部没有论证互相攻击。若一个集合攻击了某论证的所有攻击者，就说它防御了该论证。admissible set 是既 conflict-free 又能防御所有自身成员的集合。preferred extension 是极大的 admissible set，也就是不能再加入更多论证而仍保持 admissible。",
        "id": "c9-q10",
        "count": 2,
        "years": [
          "2015/16",
          "2017/18"
        ]
      },
      {
        "title": "Combinatorial Auction XOR Bid Valuation",
        "englishQuestion": "How do you evaluate an XOR bid in a combinatorial auction?",
        "chineseQuestion": "组合拍卖中如何计算 XOR bid 的价值？",
        "englishAnswer": "Check which listed bundles are contained in the offered bundle. With XOR, the bidder can receive at most one of those listed bundles, so do not add their prices together. If several listed bundles are satisfied, use the best single satisfied bid, usually the highest value. If none is satisfied, the bid gives value 0 for that offer.",
        "chineseAnswer": "先检查报价中列出的哪些物品组合被当前分配组合包含。XOR 表示竞标者最多只接受其中一个组合，所以不能把多个价格相加。如果多个组合都被满足，取其中一个最好的单项报价，通常是最高价值。若没有任何组合被满足，该分配下价值为 0。",
        "id": "c9-q11",
        "count": 2,
        "years": [
          "2014/15",
          "2015/16"
        ]
      },
      {
        "title": "Borda Count and Alternative Vote Calculations",
        "englishQuestion": "How do you calculate winners under Borda count and alternative vote?",
        "chineseQuestion": "如何计算 Borda count 和 alternative vote 的胜者？",
        "englishAnswer": "For Borda count with k candidates, give k - 1 points for first place, k - 2 for second, and so on; multiply by the number of voters in each column and add totals. For alternative vote, count first choices; if nobody has a majority, eliminate the lowest candidate and transfer those ballots to the next available preference until someone has a majority.",
        "chineseAnswer": "Borda count 中若有 k 个候选人，第一名得 k - 1 分，第二名得 k - 2 分，依此类推；每列乘以对应人数后求总分。alternative vote 中先数第一选择；若无人过半，淘汰最低者，并把这些选票转移到下一可用偏好，重复直到有人过半。",
        "id": "c9-q12",
        "count": 1,
        "years": [
          "2016/17"
        ]
      }
    ]
  }
];
