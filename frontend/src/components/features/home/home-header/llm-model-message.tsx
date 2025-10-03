import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Typography } from "#/ui/typography";
import { useSettings } from "#/hooks/query/use-settings";
import { DEFAULT_OPENHANDS_MODEL } from "#/utils/verified-models";
import GearIcon from "#/icons/settings-gear.svg?react";

export function LlmModelMessage() {
  const { t } = useTranslation();
  const { data: settings, isLoading } = useSettings();

  // grab the active model (or fall back to default)
  const currentModel = settings?.LLM_MODEL || DEFAULT_OPENHANDS_MODEL;

  return (
    <div className="">
      {!isLoading && (
        <div className="flex items-center gap-2">
          <Typography.H1> {t("Current Model")}: </Typography.H1>
          <div className="flex items-center gap-2 bg-[#454545] text-[#A3A3A3] rounded-sm border border-[#727987] px-3 py-1">
            <span className="text-white text-xl">{currentModel}</span>
            <span className="text-white text-2xl flex items-center relative -top-0.5">
              |
            </span>
            <Link to="/settings">
              <GearIcon
                width={25}
                height={25}
                className="cursor-pointer text-white hover:opacity-80"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
