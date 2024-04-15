"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  BellIcon,
  ChevronDownIcon,
  MessageCircleIcon,
  BadgeCheck,
  Clock12,
} from "lucide-react";
import { Button } from "./ui/button";
import { notifications } from "@/lib/mock-notifications";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionCollapsibleContent = motion(CollapsibleContent);

export const CollapsibleNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[446px] max-w-full border-border border rounded-xl shadow-sm"
    >
      <div className="flex p-4 gap-4 items-center">
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          initial={{ width: 64, height: 64 }}
          animate={
            isOpen ? { width: 40, height: 40 } : { width: 64, height: 64 }
          }
          className="size-16 p-2 flex items-center justify-center rounded-md bg-secondary text"
        >
          <div className="size-full text-gray-400">
            <BellIcon width="100%" height="100%" fill="white" strokeWidth={1} />
          </div>
        </motion.div>
        <div className="space-y-1 relative ">
          <motion.div layout="position" className="leading-none font-semibold">
            5 New Activities
          </motion.div>
          {!isOpen && (
            <motion.div
              initial={{ scaleX: 1, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground text-sm origin-top-left"
            >
              What&apos;s happening around you
            </motion.div>
          )}
        </div>
        <CollapsibleTrigger asChild>
          <Button
            className={cn(
              "ml-auto size-[30px] p-0 rounded-full transition-all duration-300",
              isOpen && "-scale-y-100"
            )}
            variant="secondary"
          >
            <span className="sr-only">Toggle</span>
            <ChevronDownIcon size={20} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <MotionCollapsibleContent
        className="overflow-hidden"
        transition={{ duration: 0.3 }}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        forceMount
      >
        <div className="pb-4">
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            className="border-border mb-4"
          />
          <div className="space-y-4 px-4">
            {notifications.map((notification, index) => (
              <motion.div
                key={index}
                className="flex justify-between"
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: isOpen ? index * 0.05 : 0,
                  duration: 0.3,
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="size-10 p-2 flex items-center justify-center rounded-md bg-secondary text">
                    <div className="size-full text-gray-400">
                      <NotificationIcon type={notification.type} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="leading-none font-semibold text-sm">
                      {notification.title}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {notification.message}
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground text-xs">
                  {notification.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionCollapsibleContent>
    </Collapsible>
  );
};

const NotificationIcon = ({
  type,
}: {
  type: "message" | "reminder" | (string & {});
}) => {
  switch (type) {
    case "message":
      return (
        <MessageCircleIcon
          width="100%"
          height="100%"
          fill="white"
          strokeWidth={1}
        />
      );
    case "reminder":
      return (
        <Clock12 width="100%" height="100%" fill="white" strokeWidth={1} />
      );

    case "achievement":
      return (
        <BadgeCheck width="100%" height="100%" fill="white" strokeWidth={1} />
      );
    default:
      return null;
  }
};
