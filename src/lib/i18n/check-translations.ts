export const checkTranslations = (source: Record<string, string>, other: Record<string, string>, otherName: string) => {
	const sourceKeys = Object.keys(source);
	const otherKeys = Object.keys(other);

  const diff = sourceKeys.filter(k => !otherKeys.includes(k));
  if (diff.length === 0) return;
	
  throw new Error(`Translations are different! ${otherName} is missing content:
  - ${diff.join("\n  - ")}
  
  Please check the files in \`src/content/i18n\` for differences
  `);
}