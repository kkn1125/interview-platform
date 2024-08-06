function useGuard() {
  function createGuard(ruleName: string, rule: (argument?: any) => boolean) {
    return rule;
  }

  return { createGuard };
}

export default useGuard;
